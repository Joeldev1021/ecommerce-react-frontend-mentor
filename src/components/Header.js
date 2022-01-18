import { useContext } from "react";
import { contextCount } from "../context/CountProvider";
import Navbar from "./Navbar";

const Header = () => {
  const { state } = useContext(contextCount);
  return (
    <header >
      <div style={{ width: "80%", margin: "auto" }} className='flex items-center justify-between border-b py-8'>
        <div className="flex items-center w-1/2">
         <img src="./images/logo.svg" alt="logo" />
           <Navbar />
        </div>
       <div className="flex w-32 justify-between items-center">
         <div className="w-[25px] h-[25px] relative">
           {
              state.count > 0 &&
              <span className="absolute right-[-5px] top-[-10px] bg-orange text-[10px] px-2 rounded-lg text-white font-bold">1</span>
           }
           <img className="w-full" src="./images/icon-cart.svg" alt="cart" />
         </div>
          <img style={{ width: "40px" }} src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
