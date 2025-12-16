// /api/stripe/webhook.ts
import { buffer } from "micro"
import Stripe from "stripe"

import type { NextApiRequest, NextApiResponse } from "next"

export const config = { api: { bodyParser: false } }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed")

  const sig = req.headers["stripe-signature"] as string | undefined
  const buf = await buffer(req)

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Only handle checkout.session.completed (or payment_intent.succeeded if you prefer)
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session
    const orderId = session.metadata?.order_id
    const userId = session.metadata?.user_id

    try {
      // Idempotency: check order status first
      const checkRes = await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
        },
        body: JSON.stringify({
          query: `
            query GetOrderStatus($id: uuid!) {
              orders_by_pk(id: $id) { id status }
            }
          `,
          variables: { id: orderId },
        }),
      })

      const checkJson = await checkRes.json()
      const currentStatus = checkJson?.data?.orders_by_pk?.status

      if (currentStatus !== "paid") {
        // update order status to "paid" and optionally set payment info
        await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
          },
          body: JSON.stringify({
            query: `
              mutation MarkOrderPaid($id: uuid!, $paymentIntentId: String) {
                update_orders_by_pk(pk_columns: {id: $id}, _set: {status: "paid", payment_intent_id: $paymentIntentId}) {
                  id
                  status
                }
              }
            `,
            variables: {
              id: orderId,
              paymentIntentId: session.payment_intent ?? null,
            },
          }),
        })

        // clear cart for this user (optional)
        if (userId) {
          await fetch(process.env.HASURA_GRAPHQL_ENDPOINT!, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!,
            },
            body: JSON.stringify({
              query: `
                mutation DeleteCartForUser($user_id: uuid!) {
                  delete_cart(where: { user_id: { _eq: $user_id } }) {
                    affected_rows
                  }
                }
              `,
              variables: { user_id: userId },
            }),
          })
        }
      } else {
        console.log("Order already marked as paid. Skipping.")
      }
    } catch (err) {
      console.error("Failed to update Hasura after webhook:", err)
      // optionally retry or log to monitoring
    }
  }

  res.json({ received: true })
}
