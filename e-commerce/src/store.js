import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import {
    productDetailsReducer,
    productListReducer
} from './reducers/productReducers';

const { createStore, compose, combineReducers, applyMiddleware } = require("redux");

const initialState = { 
    counter : 0,
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
    },
};
/* //reducer
const rootReducer = (state=initialState, action)=>{
    if(action.type === 'inc')
        return {counter:state.counter+1};
    if(action.type === 'dec')
        return {counter:state.counter-1};
    return state;
} */

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;