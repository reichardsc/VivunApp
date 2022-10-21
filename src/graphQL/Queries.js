import {gql} from '@apollo/client'

export const LOAD_PRODUCTS = gql `
query GetProducts{
    product {
      product_id
      name
      price
    }
  }
`;