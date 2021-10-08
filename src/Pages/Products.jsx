import React from 'react';
import Product from '../component/Product';
import  data  from '../data'
import './products.css'

const Products = () => {
    return (
        <div className="row center">
            {data.products.map((product)=>{
                return( 
                    <Product key={product._id} product={product}/>
                )
                
            })}
           
        </div>
    );
}

export default Products;
