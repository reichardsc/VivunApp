import React, {Fragment,useEffect, userEffect, useState} from 'react'
import {useMutation, useQuery, gql} from '@apollo/client'
import {LOAD_PRODUCTS} from '../../graphQL/Queries' 
import {CREATE_PRODUCT, DELETE_PRODUCT} from '../../graphQL/Mutations' 
import Product from "./Product";

function UpdateProduct(){
    const [product_id, setProduct_id] = useState("");
    const {product_get_error, loading, data}  = useQuery(LOAD_PRODUCTS);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    //const [deleteProduct, {delete_error}] = useMutation(DELETE_PRODUCT)
    const [products, setProducts] = useState([])
    const [del_product_id, setProduct] = useState([])

    useEffect(() => {
        if(data){
            setProducts(data.product);
        }
        
    }, [data]);

    const update_Product = () => {
        // deleteProduct ({
        //     variables: {
        //         product_id: del_product_id
        //     }
        // })

        // if(delete_error){
        //     console.log(delete_error);
        // }

    };

    return (
        <div>
            <div>Update</div>
            <div>
                <label>Select Product: </label>
                <select onChange={(e) => { setProduct(e.target.value); }}>
                    {products.map((val,index) => {
                        return <option key={index}  value={val.product_id}>{val.name}</option>
                    })}
                </select>
                <div>
                    <label>Name: </label>
                    <input type="text" placeholder="name" onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" placeholder="price" onChange={(e) => {
                        setPrice(e.target.value);
                    }}></input>
                </div>
            </div>
            <div>
                <button onClick={update_Product}>Update Product</button>
            </div>
        </div>
    );
}


export default UpdateProduct