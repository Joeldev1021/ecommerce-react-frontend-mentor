const CardItem = ({ card, handleModal }) => {
  return (
        <div onClick={() => handleModal(card)} style={{ width: "89px" }} className="m-2 rounded-md overflow-hidden cursor-pointer">
            <img className="w-full" src={card} alt="card" />
        </div>
  );
};

export default CardItem;
