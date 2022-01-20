import ArrowIcon from "./ArrowIcon";

const Arrow = ({ arrow, handleNextandPrev }) => {
  return (
    <button
      onClick={() => handleNextandPrev(arrow)}
      className={`absolute text-black hover:text-orange top-[35%] w-[3rem] h-[3rem] rounded-[50%] bg-gray-50 flex justify-center items-center z-10 ${
        arrow === "next" ? "right-11" : "left-11"
      }`}
    >
       <ArrowIcon arrow={arrow}/>
    </button>
  );
};

export default Arrow;
