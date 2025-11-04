"use client"

import { client } from "@/graphql/client"
import { ApolloProvider } from "@apollo/client/react"

export function ApolloProviders({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
