const CardItem = ({ handleItemActive, item, itemActiveId }) => {
  return (
        <div style={{ width: "89px" }}
          onClick={() => handleItemActive(item.id)}
          className={`m-2 rounded-lg overflow-hidden cursor-pointer border ${itemActiveId === item.id && "active"}`}>
            <img className="w-full" src={item.srcImgSmall} alt="card" />
        </div>
  );
};

export default CardItem;
