import React, {Fragment,useEffect, userEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_PRODUCTS} from '../../graphQL/Queries' 
import Product from "./Product";

function GetProducts() {
    const {error, loading, data}  = useQuery(LOAD_PRODUCTS);
    const [products, setProducts] = useState([])

    useEffect(() => {
        if(data){
            setProducts(data.product);
        }
        
    }, [data]);

    return <div>
        <div>Read</div>
        <div className="productsContainer">
            {products.map((val,index) => {
                return <div className="productItem" key={index}> {val.name} , {val.price}</div>;
            })}
        </div>
    </div>; 
}

export default GetProducts