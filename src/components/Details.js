import ButtonsGroup from "./ButtonsGroup";

const Details = () => {
  return (
    <div className="p-3">
      <p className="text-orange font-bold">SNEAKER COMPANY</p>
      <p className="text-[27px] md:leading-[50px]  md:text-[50px] font-bold md:mb-10">
        Fal Limited Edition Sneakers
      </p>
      <p className="py-5 md:py-1 md:w-[430px] text-dark-blue md:pb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex mb-5 justify-between md:flex-col">
        <div className="flex items-center">
          <p className="font-bold text-[27px] md:text-lg">$125.00</p>
          <p className="mx-2 font-bold text-orange bg-pale-orange px-2  rounded">
            50%
          </p>
        </div>
        <p className="p-2 md:p-0 md:pb-4 line-through text-grayish-blue">250.00</p>
      </div>
      <ButtonsGroup />
    </div>
  );
};

export default Details;
