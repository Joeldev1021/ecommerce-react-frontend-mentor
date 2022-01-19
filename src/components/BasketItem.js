import React from "react";

const BasketItem = () => {
  return (
      <div className="flex flex-col ">
          <div className="flex w-[100%] py-5 items-center">
             <img className="w-[42px] h-[42px] rounded-md" src="./images/image-product-1-thumbnail.jpg" alt="product-1" />
             <div className="px-3">
                 <p>Fall Limited Edition Sneakers</p>
                 <p>$125 x {3} <span className="font-bold">$375.00</span></p>
             </div>
             <img className="w-[15px] h-[20px]" src="./images/icon-delete.svg" alt="delete" />
          </div>
          <button className="m-auto rounded-md text-white font-bold bg-orange w-[290px] py-3 ">Checkout</button>
    </div>
  );
};

export default BasketItem;
