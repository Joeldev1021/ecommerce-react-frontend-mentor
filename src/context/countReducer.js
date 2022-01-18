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
    default:
      return state;
  }
};
