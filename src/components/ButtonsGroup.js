const ButtonsGroup = () => {
  return (
    <div className="flex">
      <div style={{ width: "150px" }} className="flex items-center justify-around bg-light-gray">
        <button><img src="./images/icon-minus.svg" alt="minus" /></button>
        <span className="font-bold">0</span>
        <button><img src="./images/icon-plus.svg" alt="plus" /></button>
      </div>
      <button className="flex justify-center mx-2 rounded-md text-white font-bold bg-orange w-2/5 py-3 shadowBtn">
        <img className="mr-3" src="./images/icon-cart-white.svg" alt="add" />Add to Card</button>
    </div>
  );
};

export default ButtonsGroup;
