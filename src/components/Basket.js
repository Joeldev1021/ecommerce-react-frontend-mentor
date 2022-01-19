/* eslint-disable no-unused-vars */
import { useState } from "react";
import BasketItem from "./BasketItem";

const Basket = () => {
  const [price, setprice] = useState(150);
  return (
    <div className="w-[350px] h-[220px]  top-7 m-auto bg-white shadow-lg shadow-slate-400 rounded-lg relative right-[150px]">
      <header className="border-b-2 p-2 px-6">
        <p className="font-bold">Cart</p>
      </header>
      <div className="flex items-center justify-center h-[80%]">
         <p className="text-center">Your cart empty.</p>
       {/* <BasketItem/> */}
      </div>
    </div>
  );
};

export default Basket;
