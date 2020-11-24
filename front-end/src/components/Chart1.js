import React , {useState, useEffect} from 'react';
import CovidModel2 from '../models/covid2';

const Chart1 = () => {

    useEffect(()=>{
        CovidModel2.getData().then((response)=>{
            console.log(response.data)
        });
    },[])
    return (
        <div>
            Chart
        </div>
    );
}

export default Chart1;
