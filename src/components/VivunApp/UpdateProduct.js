import React, {Fragment,useEffect, userEffect, useState} from 'react';
import {useMutation, useQuery, gql} from '@apollo/client';
import {LOAD_PRODUCTS} from '../../graphQL/Queries' ;
import {UPDATE_PRODUCT} from '../../graphQL/Mutations' ;

function UpdateProduct(){
    const [product_id, setProduct_id] = useState("");
    const {product_get_error, loading, data}  = useQuery(LOAD_PRODUCTS);
    const [updateProduct, {update_error}] = useMutation(UPDATE_PRODUCT);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if(data){
            setProducts(data.product);
            setProduct_id(data.product[0].product_id);
        }
        
    }, [data]);

    const update_Product = () => {
        updateProduct ({
            variables: {
                product_id: product_id,
                name: name,
                price: price
            },
            refetchQueries : [{query:LOAD_PRODUCTS }]
        })

        if(update_error){
            console.log(update_error);
        }

    };

    return (
        <div>
            <div>Update</div>
            <div>
                <label>Select Product: </label>
                <select onChange={(e) => { setProduct_id(e.target.value); }}>
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