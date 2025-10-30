// /app/api/hasura/proxy/route.ts
import { getToken } from "next-auth/jwt"

import type { NextRequest } from "next/server"

const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_ENDPOINT!
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!

export async function POST(req: NextRequest) {
  try {
    // getToken(..., raw: true) returns the raw token string that NextAuth stored
    const rawToken = await getToken({ req, secret: NEXTAUTH_SECRET, raw: true })

    if (!rawToken) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      })
    }

    const body = await req.json() // expects { query, variables? }

    const res = await fetch(HASURA_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rawToken}`,
        // Note: do NOT include admin secret here — this should act as the user
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    return new Response(JSON.stringify(data), { status: res.status })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
