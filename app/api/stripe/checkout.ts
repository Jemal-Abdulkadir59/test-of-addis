// pages/api/checkout.ts  (or .js)
import Stripe from "stripe"

import type { NextApiRequest, NextApiResponse } from "next"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

interface CheckoutRequestBody {
  orderId: string | number
  total: number
  userId?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed")

  const { orderId, total, userId } = JSON.parse(req.body) as CheckoutRequestBody

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: Math.round(total * 100),
          product_data: { name: `Order #${orderId}` },
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXTAUTH_URL}/checkout/success?orderId=${orderId}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/checkout/cancel`,
    metadata: {
      order_id: String(orderId),
      user_id: String(userId ?? ""),
    },
  })

  res.status(200).json({ url: session.url ?? null })
}
