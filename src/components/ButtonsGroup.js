import { useContext } from "react";
import { contextCount } from "../context/CountProvider";

const ButtonsGroup = () => {
  const { state, decrement, increment } = useContext(contextCount);

  return (
    <div className="flex">
      <div style={{ width: "150px" }} className="flex items-center justify-around bg-light-gray">
        <button onClick={() => decrement()} ><img src="./images/icon-minus.svg" alt="minus" /></button>
        <span className="font-bold">{state.count}</span>
        <button onClick={() => increment()}><img src="./images/icon-plus.svg" alt="plus" /></button>
      </div>
      <button className="flex justify-center mx-2 rounded-md text-white font-bold bg-orange w-2/5 py-3 shadowBtn">
        <img className="mr-3" src="./images/icon-cart-white.svg" alt="add" />Add to Card</button>
    </div>
  );
};

export default ButtonsGroup;
