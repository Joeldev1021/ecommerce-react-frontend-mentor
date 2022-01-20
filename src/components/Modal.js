/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { arrImg } from "../service";
import Arrow from "./Arrow";
import CardItem from "./CardItem";

const Modal = ({ itemActive, handleModal }) => {
  const [modalItem, setModalItem] = useState(itemActive);

  const handleItemActiveModal = (id) => {
    setModalItem(arrImg.find(i => i.id === id));
  };

  const handleNextandPrev = (arrow) => {
    console.log(arrow);
    if (arrow === "next") {
      const next = modalItem.id + 1 > arrImg.length ? 1 : modalItem.id + 1;
      handleItemActiveModal(next);
    } else {
      const prev = modalItem.id - 1 < 1 ? arrImg.length : modalItem.id - 1;
      handleItemActiveModal(prev);
    }
  };

  return (
    <div className="modal-container z-40">
      <div className="modal-content relative w-[35rem] h-[37rem] m-auto top-20">
        <button onClick={() => handleModal()} className="absolute right-[5rem] text-white hover:text-orange">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-current"
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <Arrow handleNextandPrev={handleNextandPrev} arrow={"next"} />
        <img
          className="w-[26rem] m-auto absolute left-0 right-0 top-[3rem] rounded-[1rem]"
          src={modalItem.srcImg}
          alt=""
        />
        <Arrow handleNextandPrev={handleNextandPrev} arrow={"previous"} />
        <div className="flex m-auto absolute justify-center bottom-0 left-0 right-0 ">
          {arrImg.map((item) => (
            <CardItem
              key={item.id}
              width="70px"
              item={item}
              itemActive={modalItem}
              handleItemActive={handleItemActiveModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;

{
  /*
   <div className="w-[30rem] rounded-[1rem] overflow-hidden container-img">
        <div className="absolute">
          <img src="./images/icon-next.svg" alt="next" />
        </div>
        <img className="w-full" src={itemActive.srcImg} alt="" />
        <div className="absolute">
          <img src="./images/icon-previous.svg" alt="pre" />
        </div>
      </div>

 */
}
