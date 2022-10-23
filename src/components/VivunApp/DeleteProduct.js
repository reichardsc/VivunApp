import React, {Fragment,useEffect, userEffect, useState} from 'react';
import {useMutation, useQuery, gql} from '@apollo/client';
import {LOAD_PRODUCTS} from '../../graphQL/Queries';
import {CREATE_PRODUCT, DELETE_PRODUCT} from '../../graphQL/Mutations' ;


function DeleteProduct(){
    const {product_get_error, loading, data}  = useQuery(LOAD_PRODUCTS);
    const [deleteProduct, {delete_error}] = useMutation(DELETE_PRODUCT);
    const [products, setProducts] = useState([]);
    const [del_product_id, setProduct] = useState([]);

    useEffect(() => {
        if(data){
            setProducts(data.product);
            setProduct(data.product[0].product_id);
        }
        
    }, [data]);

    const delete_Product = () => {
        deleteProduct ({
            variables: {
                product_id: del_product_id
            },
            refetchQueries : [{query:LOAD_PRODUCTS }]
        })

        if(delete_error){
            console.log(delete_error);
        }

    };

    return (
        <div>
            <div>Delete</div>
            <div>
                <label>Select Product: </label>
                <select onChange={(e) => { setProduct(e.target.value); }}>
                    {products.map((val,index) => {
                        return <option key={index}  value={val.product_id}>{val.name}</option>
                    })}
                </select>
            </div>
            <div>
                <button onClick={delete_Product}>Delete Product</button>
            </div>
        </div>
    );
}


export default DeleteProduct