/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";
import { countReducer } from "./countReducer.js";

export const contextCount = createContext();

const initialState = {
  count: 0
};

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const addCart = (item) => {
    dispatch({ type: "ADD_CART" });
  };

  return (
        <contextCount.Provider value={{
          state,
          decrement,
          increment
        }}>
          {children}
        </contextCount.Provider>
  );
};

export default CountProvider;
