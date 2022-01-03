import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface ApolloProviderProps {
  children: JSX.Element;
}

const COUNTRIES_ENDPOINT = "https://countries.trevorblades.com/";

const client = new ApolloClient({
  uri: COUNTRIES_ENDPOINT,
  cache: new InMemoryCache(),
});

export default function ApolloProviderWrapper({
  children,
}: ApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
