import {useQuery, gql} from '@apollo/client';

export const LOAD_PRODUCTS = gql `
query GetProducts{
    product {
      product_id
      name
      price
    }
}`;

export const LOAD_CUSTOMERS = gql `
query GetCustomers {
  customer {
    customer_id
    first_name
    last_name
  }
}`;

export const LOAD_TOTAL_SALES = gql `
query GetTotalSales {
  customer_total_sales {
    first_name
    last_name
    total_price
  }
}`;