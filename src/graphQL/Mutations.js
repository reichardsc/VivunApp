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