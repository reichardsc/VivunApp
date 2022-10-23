import React, {Fragment,useEffect, userEffect, useState} from 'react';
import {useMutation, useQuery, gql} from '@apollo/client';
import {LOAD_PRODUCTS} from '../../graphQL/Queries' ;
import {CREATE_PRODUCT} from '../../graphQL/Mutations' ;

function InsertProduct(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [createProduct, {error}] = useMutation(CREATE_PRODUCT);


    const addProduct = () => {
        createProduct ({
            variables: {
                name: name,
                price: price
            },
            refetchQueries : [{query:LOAD_PRODUCTS }]
        })

        if(error){
            console.log(error);
        }

    };


    return (
        <div>
            <div>Create</div>
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
            <div>
                <button onClick={addProduct}>Create Product</button>
            </div>
        </div>
    );
}


export default InsertProduct