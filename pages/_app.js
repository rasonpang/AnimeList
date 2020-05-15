import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ApolloProvider } from "@apollo/react-hooks"

const cache = new InMemoryCache()
const link = new HttpLink({
    uri: "https://graphql.anilist.co"
})
const client = new ApolloClient({ cache, link })

export default function App({Component, pageProps}) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}