const initialState = {
  data: [
    { id: 1, title: "Product A", price: 10.99 },
    { id: 2, title: "Product B", price: 5.49 },
  ],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addedData = [...state.data, action.payload];
      return { data: addedData };

    case "REMOVE_FROM_CART":
      const removedData = state.data.filter((item) => {
        return item.id != action.payload.id;
      });
      return { data: removedData };

    default:
      return state;
  }
};

export default CartReducer;
