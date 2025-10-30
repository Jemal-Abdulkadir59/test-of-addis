// /app/api/auth/signup/route.ts
import { hash } from "bcryptjs"
import { gql, request } from "graphql-request"

import type { NextRequest } from "next/server"

const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_ENDPOINT!
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET!

const INSERT_USER = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $name: String
    $username: String
    $role: String
  ) {
    insert_users_one(
      object: {
        email: $email
        password: $password
        name: $name
        username: $username
        role: $role
      }
    ) {
      id
      email
      name
      username
      role
    }
  }
`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { email, password, firstName, lastName, username, role } = body
    let name = `${firstName} ${lastName}`.trim()

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing email/password" }), {
        status: 400,
      })
    }

    const hashed = await hash(password, 10)
    const data = await request(
      HASURA_GRAPHQL_URL,
      INSERT_USER,
      { email, password: hashed, name, username, role: role || "user" },
      { "x-hasura-admin-secret": HASURA_ADMIN_SECRET }
    )

    return new Response(JSON.stringify({ user: data.insert_users_one }), {
      status: 201,
    })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
