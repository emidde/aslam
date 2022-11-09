import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cla7q578i1eud01uq4weybdlt/master',
  cache: new InMemoryCache(),
});

export default client;