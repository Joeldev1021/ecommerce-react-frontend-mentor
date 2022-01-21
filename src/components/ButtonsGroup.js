import { useContext } from "react";
import { contextCount } from "../context/CountProvider";

const ButtonsGroup = () => {
  const { state, decrement, increment, addCart, resetCount } = useContext(contextCount);

  const handleClick = () => {
    addCart();
    resetCount();
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex items-center py-3 md:w-[150px] justify-around bg-light-gray">
        <button onClick={() => decrement()} ><img src="./images/icon-minus.svg" alt="minus" /></button>
        <span className="font-bold">{state.count}</span>
        <button onClick={() => increment()}><img src="./images/icon-plus.svg" alt="plus" /></button>
      </div>
      <button onClick={() => handleClick()} className="flex w-[90%] m-auto hover:opacity-[0.5]  justify-center md:mx-2 rounded-md text-white font-bold bg-orange md:w-2/5 py-3 shadowBtn">
        <img className="mr-3" src="./images/icon-cart-white.svg" alt="add" />Add to Card
      </button>
    </div>
  );
};

export default ButtonsGroup;
