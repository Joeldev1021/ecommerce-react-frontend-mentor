/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardItem from "./CardItem";
import { arrImg } from "../service";
import Modal from "./Modal";
import ProductImg from "./ProductImg";

const CardProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemActive, setItemActive] = useState(arrImg[0]);

  const handleModal = () => {
    if (window.innerWidth > 768) {
      setShowModal(!showModal);
    }
  };

  const handleItemActive = (id) => {
    setItemActive(arrImg.find(i => i.id === id));
  };

  return (
    <section>
       {showModal && <Modal itemActive={itemActive} handleItemActive={handleItemActive} handleModal={handleModal}/>}
      <div onClick={() => handleModal()} className="w-[100%] relative md:w-[400px] md:static overflow-hidden md:rounded-[1rem] hover:cursor-pointer">
         <ProductImg itemActive={itemActive}/>
      </div>
      <div className="flex mt-2 ">
        {arrImg.map((item) => (
          <CardItem key={item.id} handleItemActive={handleItemActive} item={item} itemActive={itemActive}/>
        ))}
      </div>
    </section>
  );
};

export default CardProduct;
