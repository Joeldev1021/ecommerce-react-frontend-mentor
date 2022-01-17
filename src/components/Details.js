import ButtonsGroup from "./ButtonsGroup";

const Details = () => {
  return (
    <div>
      <p className="text-orange font-bold">SNEAKER COMPANY</p>
      <p style={{ lineHeight: "50px" }} className="text-[50px] font-bold mb-10">Fal Limited Edition Sneakers</p>
      <p style={{ width: "430px" }} className="text-dark-blue pb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex">
        <p className="font-bold text-lg">$125.00</p>
        <p className="mx-2 font-bold text-orange bg-pale-orange px-2 rounded">50%</p>
      </div>
      <p className="pb-4 line-through text-grayish-blue">250.00</p>
      <ButtonsGroup />
    </div>
  );
};

export default Details;
