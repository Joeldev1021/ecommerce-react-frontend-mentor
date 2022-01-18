const CardItem = ({ handleItemActive, item, itemActive, width }) => {
  return (
        <div style={{ width: width || "89px" }}
          onClick={() => handleItemActive(item.id)}
          className={`m-2 rounded-lg overflow-hidden cursor-pointer border ${itemActive.id === item.id && "active"}`}>
            <img className="w-full" src={item.srcImgSmall} alt="card" />
        </div>
  );
};

export default CardItem;
