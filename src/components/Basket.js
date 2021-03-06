/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { contextCount } from "../context/CountProvider";
import BasketItem from "./BasketItem";

const Basket = () => {
  const { state } = useContext(contextCount);
  console.log(state.cartItem);
  return (
    <div className="w-[350px] h-[220px] left-0 z-50 right-0 md:left-[70%] md:right-[100px] md:top-[100px] m-auto bg-white shadow-lg shadow-slate-400 rounded-lg absolute ">
      <header className="border-b-2 p-2 px-6">
        <p className="font-bold">Cart</p>
      </header>
      <div className="flex items-center justify-center h-[80%]">
        {state.cartItem > 0 ? <BasketItem/> : <p className="text-center text-dark-blue">Your cart empty.</p>}
      </div>
    </div>
  );
};

export default Basket;
