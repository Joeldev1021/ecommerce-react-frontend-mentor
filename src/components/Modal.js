/* eslint-disable no-unused-vars */
import { arrImg } from "../service";
import CardItem from "./CardItem";

const Modal = ({ itemActive, handleModal }) => {
  return (
    <div className="modal">
      <div className="w-[30rem] rounded-[1rem] overflow-hidden container-img">
        <img src="./" alt="" />
        <img className="w-full" src={itemActive.srcImg} alt="" />
      </div>
      <button
        onClick={() => handleModal()}
        className="absolute margin-auto top-20 right-[35%] "
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className="flex">
        {/* {arrImg.map((item) => (
        <CardItem key={item.id} card={item.card} handleModal={handleModal} />
      ))} */}
      </div>
    </div>
  );
};

export default Modal;
