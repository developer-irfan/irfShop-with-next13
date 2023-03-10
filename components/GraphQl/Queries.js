import { gql } from "@apollo/client";

export const GetAllProducts = gql`
  query {
    products {
      id
      img
      title
      place
      price
    }
  }
`;

export const AddProduct = gql`
  mutation addProduct(
    $img: String!
    $title: String!
    $place: String!
    $price: String!
  ) {
    addProduct(img: $img, title: $title, place: $place, price: $price) {
      img
      title
      place
      price
    }
  }
`;
