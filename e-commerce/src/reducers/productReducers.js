export const productListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
        case 'Product_list_request':
            return { loading: true };
        case 'Product_list':
            return { loading: false, products: action.payload};
        case 'Product_list_failed':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case 'Product_details_request':
        return { loading: true };
      case 'Product_details_success':
        return { loading: false, product: action.payload };
      case 'Product_details_failed':
        return { loading: false, error: action.payload };
      default:
        return state;
    }
};