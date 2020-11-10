import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

export default function ProductScreen(props) {
    
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    
    const addToCartHandle = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    
    const numbers = [1, 2, 3, 4, 5];

    return(
        <div className="row">
            {loading ? (<div>loading</div>) 
            :error ? (<div>{error}</div>) 
            : (
                <div>
                    <div className="col-2">
                        <img
                        style={{width:'50%'}}
                        src={product.image}
                        alt={product.title}
                        ></img>
                    </div>
                    <div className="col-1">
              <ul style={{listStyleType:'none'}}>
                <li>
                  <h1>{product.title}</h1>
                </li>
                <li>Price : ${product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <>
                <li style={{listStyleType:'none'}}>
                <div className="row center">
                    <div>Qty</div>
                    <div style={{width:"50%"}}>
                    <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                    >
                        {numbers.map(
                        (x) => (
                            <option key={x} value={x}>{x}</option>
                        )
                        )}
                    </select>
                    </div>
                    <button onClick={addToCartHandle}>Add to Cart</button>
                </div>
                </li>
            </>
            </div>
            )
            }
        </div>
    )
}