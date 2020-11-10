export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'Cart_add_item':
          const item = action.payload;
          const existItem = state.cartItems.find((x) => x.product === item.product);
          if (existItem) {
            return {
              ...state,
              cartItems: state.cartItems.map((x) =>
                x.product === existItem.product ? item : x
              ),
            };
          } else {
            return { ...state, cartItems: [...state.cartItems, item] };
          }
        case 'Cart_remove_item':
          return {
            ...state,
            cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        };
        case 'Cart_empty':
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};