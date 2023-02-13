import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
const products = require("../../data/products.json");
const typeDefs = gql`
  type Product {
    img: String!
    title: String!
    place: String!
    price: String!
  }

  type Query {
    products: [Product]!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
