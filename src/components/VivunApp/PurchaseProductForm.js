import React, {Fragment,useEffect, userEffect, useState} from 'react';
import {useMutation, useQuery, gql} from '@apollo/client';
import {LOAD_PRODUCTS, LOAD_CUSTOMERS, LOAD_TOTAL_SALES} from '../../graphQL/Queries' ;
import {INSERT_SALE} from '../../graphQL/Mutations' ;

function PurchaseProductForm(){
    const {product_get_error, product_loading, data: product_data}  = useQuery(LOAD_PRODUCTS);
    const {customer_get_error, customer_loading, data: customer_data}  = useQuery(LOAD_CUSTOMERS);
    const [product_id, setProduct_id] = useState("");
    const [customer_id, setCustomer_id] = useState("");
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [insertSale, {sale_error}] = useMutation(INSERT_SALE);

    useEffect(() => {
        if(product_data)
        {
            setProducts(product_data.product);
            setProduct_id(product_data.product[0].product_id);
        }
        if(customer_data)
        {
            setCustomers(customer_data.customer);
            setCustomer_id(customer_data.customer[0].customer_id);
        }
        
    }, [product_data,customer_data]);


    const insert_sale = () => {
        insertSale ({
            variables: {
                customer_id: customer_id,
                product_id: product_id,

            },
            refetchQueries : [{query:LOAD_TOTAL_SALES}]
        })

        if(sale_error){
            console.log(sale_error);
        }

    };

    return (
        <div>
            <div>Make a Sale</div>
            <div>
                <label>Select Customer: </label>
                <select onChange={(e) => { setCustomer_id(e.target.value); }}>
                    {customers.map((val,index) => {
                        return <option key={index}  value={val.customer_id}>{val.first_name} {val.last_name} </option>
                    })}
                </select>

                <label>Select Product: </label>
                <select onChange={(e) => { setProduct_id(e.target.value); }}>
                    {products.map((val,index) => {
                        return <option key={index}  value={val.product_id}>{val.name}</option>
                    })}
                </select>
               
            </div>
            <div>
                <button onClick={insert_sale}>Purchase</button>
            </div>
        </div>
    );
}


export default PurchaseProductForm