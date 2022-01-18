import CardProduct from "./CardProduct";
import Details from "./Details";

const Main = () => {
  return (
        <div className="container grid grid-cols-2 mt-20 m-[auto] w-5/6 ">
            <CardProduct/>
            <Details />
        </div>
  );
};

export default Main;
