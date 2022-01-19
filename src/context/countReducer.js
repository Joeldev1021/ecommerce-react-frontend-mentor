export const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count === 0 ? 0 : state.count - 1
      };
    case "RESET":
      return {
        ...state,
        count: 0
      };
    case "ADD_CART":
      return {
        ...state,
        cartItem: state.count + state.cartItem
      };
    case "RESET_CART":
      return {
        ...state,
        cartItem: 0
      };
    default:
      return state;
  }
};
