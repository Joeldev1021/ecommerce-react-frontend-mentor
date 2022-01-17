/* eslint-disable no-unused-vars */
import { useState } from "react";
import CardItem from "./CardItem";
import { arrImg } from "../service";
import Modal from "./Modal";

const CardProduct = () => {
  const [modal, setModal] = useState(false);
  const [itemModal, setItemModal] = useState(null);

  const handleModal = (item) => {
    setItemModal(item.split("/")[2].slice(0, -14));
    setModal(!modal);
  };

  return (
    <section>
      {modal && <Modal itemModal={itemModal}/>}
      <div style={{ width: "400px", margin: "auto" }} className="overflow-hidden rounded-md">
        <img style={{ width: "100%" }} src="./images/image-product-1.jpg" alt="product-1" />
      </div>
      <div className="flex mt-2 justify-center">
        {arrImg.map((item) => (
          <CardItem key={item.id} handleModal={handleModal} card={item.card} />
        ))}
      </div>
    </section>
  );
};

export default CardProduct;
