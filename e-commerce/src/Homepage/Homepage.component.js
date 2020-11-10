import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
// import Axios from 'axios';

export default function Homepage() {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
  /*   useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products')
        .then((plist)=>{
            console.log(plist.data[0]);
        });
    }); */
    return(
        <>
            <div className="row">
                {loading ? (<div>Loading</div>)
                :error ? (<div>{error}</div>)
                : (
                    <div style={{width: "50%", display: "inline-block"}}>
                        {products.map((product, index) => {
                            return(
                                <div key={product.id}>
                                    <Product key={product.id} product={product}></Product>
                                </div>
                            )
                        })}
                    </div>
                )
                }
                
            </div>
        </>
    );
}