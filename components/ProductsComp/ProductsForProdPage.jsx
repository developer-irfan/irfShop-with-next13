"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import AllProducts from "./AllProducts";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
  }),
});

const ProductsForProdPage = () => {
  return (
    <ApolloProvider client={client}>
      <AllProducts />
    </ApolloProvider>
  );
};

export default ProductsForProdPage;
