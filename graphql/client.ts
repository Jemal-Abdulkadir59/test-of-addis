// graphql/client.ts apollo client setup with auth link for NextAuth.js
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client"
import { getSession } from "next-auth/react"

const HASURA_HTTP = "http://localhost:8080/v1/graphql"

const authLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let sub: any

      // perform async session fetch, then set headers and forward the operation
      getSession()
        .then((session) => {
          const token = session?.accessToken

          // Add Authorization header only if token exists
          operation.setContext({
            headers: {
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          })

          const forwarded = forward(operation)
          if (forwarded) {
            sub = forwarded.subscribe({
              next: (result) => observer.next(result),
              error: (err) => observer.error(err),
              complete: () => observer.complete(),
            })
          } else {
            observer.complete()
          }
        })
        .catch((err) => {
          observer.error(err)
        })

      // cleanup
      return () => {
        if (sub) {
          sub.unsubscribe?.()
        }
      }
    })
)

export const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: HASURA_HTTP })),
  cache: new InMemoryCache(),
})
