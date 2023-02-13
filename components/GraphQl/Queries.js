import { gql } from "@apollo/client";

export const GetAllProducts = gql`
  query {
    products {
      img
      title
      place
      price
    }
  }
`;
