import React, {Fragment,useEffect, userEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/client';
import {LOAD_TOTAL_SALES} from '../../graphQL/Queries' ;

function GetTotalSales() {
    const {error, loading, data}  = useQuery(LOAD_TOTAL_SALES);
    const [sales, totalSales] = useState([]);

    useEffect(() => {
        if(data){
            totalSales(data.customer_total_sales);
        }
        
    }, [data]);

    return <div>
        <div>Total Sales</div>
        <div className="salesContainer">
            {sales.map((val,index) => {
                return <div className="salesItem" key={index}> {val.first_name} , {val.last_name},  {val.total_price}</div>;
            })}
        </div>
    </div>; 
}

export default GetTotalSales