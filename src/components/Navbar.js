/* eslint-disable no-unused-vars */

import { forwardRef } from "react";

const routes = ["collections", "men", "women", "about", "contact"];

const Navbar = ({ showMenu, handleMenuShow }, ref) => {
  const menuClass = "absolute bg-white top-0 left-0 h-[100%] z-50 w-60 text-black font-bold ";
  return (
    <nav ref={ref} className={`menu ${menuClass} md:-z-0 md:translate-x-1 md:font-normal md:static md:flex list-none justify-between md:w-full text px-3 pl-5 md:text-dark-blue`}>
        <button onClick={() => handleMenuShow()} className="p-4 font-bold pt-3 md:hidden">x</button>
       {routes.map(item => <li className="p-3 capitalize" key={item}><a href="#">{item}</a></li>)}
    </nav>
  );
};

export default forwardRef(Navbar);
