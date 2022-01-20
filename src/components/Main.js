import CardProduct from "./CardProduct";
import Details from "./Details";

const Main = () => {
  return (
        <div className="container grid grid-cols-1 md:grid-cols-2  md:mt-20 m-[auto] md:w-5/6 ">
            <CardProduct/>
            <Details />
        </div>
  );
};

export default Main;
