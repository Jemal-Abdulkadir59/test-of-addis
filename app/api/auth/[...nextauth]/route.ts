// /app/api/auth/[...nextauth]/route.ts

import { compare } from "bcryptjs"
import { gql, request } from "graphql-request"
import jwt from "jsonwebtoken"
import NextAuth from "next-auth"

import type { NextAuthOptions, RequestInternal, User } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"

// --- ENV ---
const HASURA_GRAPHQL_URL = process.env.HASURA_GRAPHQL_ENDPOINT!
const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET!
const HASURA_JWT_SECRET = process.env.HASURA_JWT_SECRET!
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET!

// --- GraphQL Query ---
const GET_USER_BY_EMAIL = gql`
  query GetUser($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
      email
      password
      name
      role
    }
  }
`

// --- NextAuth Configuration ---
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        if (!credentials?.email || !credentials?.password) return null

        // Query Hasura for the user using admin secret
        const data = await request(
          HASURA_GRAPHQL_URL,
          GET_USER_BY_EMAIL,
          { email: credentials.email },
          { "x-hasura-admin-secret": HASURA_ADMIN_SECRET }
        )

        const user = data?.users?.[0]
        if (!user) return null

        const valid = await compare(credentials.password, user.password)
        if (!valid) return null

        const returnedUser = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role!,
          avatar: null,
          status: null,
        } as unknown as User

        return returnedUser
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
    updateAge: 60 * 15, // rotate every 15 minutes
  },

  jwt: {
    encode: async ({ token }) => {
      if (!token?.id) return ""

      const now = Math.floor(Date.now() / 1000)
      const payload = {
        sub: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
        iat: now,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": [token.role],
          "x-hasura-default-role": token.role,
          "x-hasura-user-id": token.id,
        },
      }

      return jwt.sign(payload, HASURA_JWT_SECRET, {
        algorithm: "HS256",
        expiresIn: "1h",
      })
    },

    decode: async ({ token }) => {
      if (!token) return null
      try {
        const payload = jwt.verify(token, HASURA_JWT_SECRET) as
          | jwt.JwtPayload
          | string
        if (typeof payload === "string") return null
        return {
          id: payload.sub,
          email: payload.email,
          name: payload.name,
          role: payload.role,
          iat: payload.iat,
          exp: payload.exp,
        } as any
      } catch {
        return null
      }
    },
  },

  callbacks: {
    async jwt({ token, user }) {
      const now = Math.floor(Date.now() / 1000)

      // 1️⃣ First login
      if (user) {
        token.id = (user as any).id
        token.email = (user as any).email
        token.role = (user as any).role
        token.name = (user as any).name
        token.accessToken = jwt.sign(
          {
            sub: (user as any).id,
            email: (user as any).email,
            "https://hasura.io/jwt/claims": {
              "x-hasura-allowed-roles": [(user as any).role],
              "x-hasura-default-role": (user as any).role,
              "x-hasura-user-id": (user as any).id,
            },
          },
          HASURA_JWT_SECRET,
          { expiresIn: "1h" }
        )
        token.accessTokenExpires = now + 3600
        return token
      }

      // 2️⃣ If still valid
      if (token.accessTokenExpires && now < token.accessTokenExpires) {
        return token
      }

      // 3️⃣ Refresh token if expired
      token.accessToken = jwt.sign(
        {
          sub: token.id,
          email: token.email,
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": [token.role],
            "x-hasura-default-role": token.role,
            "x-hasura-user-id": token.id,
          },
        },
        HASURA_JWT_SECRET,
        { expiresIn: "1h" }
      )
      token.accessTokenExpires = now + 3600
      return token
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        email: token.email,
        name: token.name,
        role: token.role,
      } as any

      session.accessToken = token.accessToken
      session.accessTokenExpires = token.accessTokenExpires
      return session
    },
  },

  secret: NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
