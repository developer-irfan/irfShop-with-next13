import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
const products = require("../../data/products.json");
const typeDefs = gql`
  type Product {
    id: ID!
    img: String!
    title: String!
    place: String!
    price: String!
  }

  type Query {
    products: [Product]!
  }

  type Mutation {
    addProduct(
      img: String!
      title: String!
      place: String!
      price: String!
    ): Product
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
  Mutation: {
    addProduct: (parent, args) => {
      const newProduct = {
        img: args.img,
        title: args.title,
        place: args.place,
        price: args.price,
      };
      products.push(newProduct);
      return newProduct;
    },
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
