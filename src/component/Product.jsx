import React from 'react';
import "./product.css"

import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <div key={product._id} className="cart">
            <img className="imag" src={product.image}/>
            <div className="cart-info">
                <h4>Name: {product.name}</h4> 
                <div className="row">
                    <div className="price">
                    <h3>Price: {product.price}GNF</h3>
                    </div>

                </div>

            </div>
            <Link to={`/Product/${product._id}`}>
            <button >View</button>
            </Link>

            

            
        </div>
    );
}

export default Product;
