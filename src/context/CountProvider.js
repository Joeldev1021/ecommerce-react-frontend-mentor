/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";
import { countReducer } from "./countReducer.js";

export const contextCount = createContext();

const initialState = {
  count: 0,
  cartItem: 0
};

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const resetCount = () => {
    dispatch({ type: "RESET" });
  };

  const addCart = () => {
    dispatch({ type: "ADD_CART" });
  };

  const resetCart = () => {
    dispatch({ type: "RESET_CART" });
  };

  return (
        <contextCount.Provider value={{
          state,
          decrement,
          increment,
          resetCount,
          resetCart,
          addCart
        }}>
          {children}
        </contextCount.Provider>
  );
};

export default CountProvider;
