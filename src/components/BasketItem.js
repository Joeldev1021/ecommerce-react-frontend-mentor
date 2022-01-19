/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { contextCount } from "../context/CountProvider";
import { countReducer } from "../context/countReducer";

const BasketItem = () => {
  const { state, resetCart } = useContext(contextCount);
  const [price, setprice] = useState(125);

  return (
    <div className="flex flex-col ">
      <div className="flex w-[100%] py-5 items-center">
        <img
          className="w-[42px] h-[42px] rounded-md"
          src="./images/image-product-1-thumbnail.jpg"
          alt="product-1"
        />
        <div className="px-3 text-dark-blue">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125 x {state.cartItem}{" "}
            <span className="font-bold text-black">
              ${price * state.cartItem}
            </span>
          </p>
        </div>
        <button onClick={() => resetCart()}>
          <img
            className="w-[15px] h-[20px]"
            src="./images/icon-delete.svg"
            alt="delete"
          />
        </button>
      </div>
      <button className="m-auto rounded-md text-white font-bold bg-orange w-[290px] py-3 ">
        Checkout
      </button>
    </div>
  );
};

export default BasketItem;
