const initialData = {
  cartItems: [],
};

const cartReducer = (state = initialData, action) => {
  const isUnique = !state.cartItems.find(item => item === action.payload);
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cartItems: 
          isUnique
            ? [...state.cartItems, action.payload]
            : state.cartItems,
      };
    case "DELETE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.itemName !== action.payload.itemName)
      };
    default:
      return state;
  }
};

export default cartReducer;
