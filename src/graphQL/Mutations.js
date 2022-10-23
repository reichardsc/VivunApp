import {gql} from '@apollo/client'

export const CREATE_PRODUCT = gql`
  mutation ($name:String!, $price: Int!) {
    insert_product(objects: 
      { 
          name: $name,
          price: $price
      }
      ) {
      affected_rows
      returning {
        product_id
        name
        price
      }
    }
  }
`

export const DELETE_PRODUCT = gql`
  mutation ($product_id:Int!) {
    delete_product(where: {product_id: {_eq:$product_id}}) {
        returning {
          product_id
        }
    }
  }
`

export const UPDATE_PRODUCT = gql`
mutation ($product_id:Int!, $name:String!, $price: Int!) {
  update_product_by_pk(pk_columns: {product_id: $product_id}, _set: {name: $name, price: $price}) {
    product_id
    name
    price
  }
}
`

export const INSERT_SALE = gql`
mutation ($customer_id:Int!, $product_id:Int!) {
  insert_sale(objects: 
    { 
        customer_id: $customer_id,
        product_id: $product_id
    }
    ) {
    affected_rows
    returning {
      sale_id
    }
  }
}
`