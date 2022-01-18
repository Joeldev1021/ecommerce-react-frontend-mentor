/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardItem from "./CardItem";
import { arrImg } from "../service";
import Modal from "./Modal";

const CardProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [itemActive, setItemActive] = useState(arrImg[0]);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleItemActive = (id) => {
    setItemActive(arrImg.find(i => i.id === id));
  };
  console.log(itemActive);

  return (
    <section>
       {showModal && <Modal itemActive={itemActive} handleItemActive={handleItemActive} handleModal={handleModal}/>}
      <div onClick={() => handleModal()} style={{ width: "400px", margin: "auto" }} className="overflow-hidden rounded-[1rem]">
        <img style={{ width: "100%" }} src={itemActive.srcImg} alt="product-1" />
      </div>
      <div className="flex mt-2 justify-center">
        {arrImg.map((item) => (
          <CardItem key={item.id} handleItemActive={handleItemActive} item={item} itemActive={itemActive}/>
        ))}
      </div>
    </section>
  );
};

export default CardProduct;
