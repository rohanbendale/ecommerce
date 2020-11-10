import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
    const product = props.product;
    return(
        <div key={product.id} className="card">
            <div className="card-body">
                <Link to={`/product/${product.id}`}>
                    <img className="medium" src={product.image} alt={product.title}/>
                </Link>
                <Link to={`/product/${product.id}`}>
                    <h2>{product.title}</h2>
                </Link>
            </div>
            <div className="price">${product.price}</div>
        </div>
    );
}