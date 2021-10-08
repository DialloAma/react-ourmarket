import React from 'react';
import "./viewproduct.css"
import data from '../data';




const Viewproduct = (props) => {
   // const id=props.match.params
   // const product= data.products.find((x)=>x._id === props.match.params.id )
   // console.log(product)
   
    return (
        <div className="view top">
            
            <div className="col-2">
              <img className="ima" src={data.products.image}>
              </img>
            </div>
            <div className="cart cart-body">
            <div className="view">
              <div className="col-1">
                  <h3>Name:</h3>
                  <h3>Price:</h3>
                  <h3>Description:</h3>
               </div>
               
                
                 
                
                <button className="primary"> Add To Cart </button> 
                
                
                
               </div>
            </div>
        </div>
    );
}

export default Viewproduct;
