/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import { arrImg } from "../service";

const ProductImg = ({ itemActive }) => {
  const [item, setItem] = useState(itemActive);

  const handleItemActive = (n) => {
    if (n === "next") {
      const next = item.id + 1 > arrImg.length ? 1 : item.id + 1;
      setItem(arrImg.find(i => i.id === next));
    } else {
      const prev = item.id - 1 < 1 ? arrImg.length : item.id - 1;
      setItem(arrImg.find(i => i.id === prev));
    }
  };

  return (
    <>
      <button onClick={() => handleItemActive("next")} className="text-black hover:text-orange absolute m-auto top-0 bottom-0 right-7  md:hidden w-[2.5rem] h-[2.5rem]  rounded-[50%] bg-gray-50 flex justify-center items-center">
        <ArrowIcon arrow="next" />
      </button>
      <img className="w-[100%]" src={item.srcImg} alt="product-1" />
      <button onClick={() => handleItemActive("prev")} className="text-black hover:text-orange absolute m-auto top-0 bottom-0 left-7 md:hidden w-[2.5rem] h-[2.5rem] rounded-[50%] bg-gray-50 flex justify-center items-center">
        <ArrowIcon arrow="prev" />
      </button>
    </>
  );
};

export default ProductImg;
