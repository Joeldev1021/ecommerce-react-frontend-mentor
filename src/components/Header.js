
import { useContext, useRef, useState } from "react";
import { contextCount } from "../context/CountProvider";
import Basket from "./Basket";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(contextCount);
  const navRef = useRef(null);

  const handleBasketCart = () => {
    console.log(" Basket Cart Clicked");
    setIsOpen(!isOpen);
  };
  const handleMenuShow = () => {
    navRef.current.classList.toggle("hidden-menu");
  };

  return (
    <header className="m-auto" >
      <div className='flex m-auto w-[90%] md:w-[80%] py-4 items-center justify-between border-b md:py-8 '>
        <div className="flex items-center justify-between w-[170px] md:w-1/2">
          <button onClick={() => handleMenuShow()}>
             <img className="block md:hidden" src="./images/icon-menu.svg" alt="" />
          </button>
         <img src="./images/logo.svg" alt="logo" />
           <Navbar ref={navRef} handleMenuShow={handleMenuShow} />
        </div>
       <div className="flex w-[100px] md:w-32 justify-between items-center">
         <div className="w-[25px] h-[25px] relative">
           {state.cartItem > 0 &&
             <span className="absolute right-[-5px] top-[-10px] bg-orange text-[10px] px-2 rounded-lg text-white font-bold">{state.cartItem}</span>}
           <img onClick={() => handleBasketCart()} className="w-full hover:cursor-pointer" src="./images/icon-cart.svg" alt="cart" />
         </div>
          <img className="w-[40px] rounded-full border-2 hover:border-orange hover:cursor-pointer " src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
      {isOpen && <Basket/>}
    </header>
  );
};

export default Header;
