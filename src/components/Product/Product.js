import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
    // console.log(props.product);
    // const {img, name} = props.product;
    console.log(props.product);
    return (
        <div className="product">
            <div>
                <img src={props.product?.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{props.product?.name}</h4>
                <br></br>
                <p><small> by {props.product?.seller}</small></p>
                <p>price:${props.product?.price}</p>
                <br></br>
                <p><small>only: {props.product?.stock} left in stock-order soon</small></p>
                <button className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>

        </div>
    );
};

export default Product;