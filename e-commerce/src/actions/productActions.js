import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: 'Product_list_request',
      });
    try {
        const {data} = await axios.get('https://fakestoreapi.com/products');
        console.log("data", data);
        dispatch({ type: 'Product_list', payload: data });
    } 
    catch(error) {
        dispatch({ type: 'Product_list_failed', payload: error.message });
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: 'Product_details_request', payload: productId });
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch({ type: 'Product_details_success', payload: data });
    } catch (error) {
      dispatch({
        type: 'Product_details_failed',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };