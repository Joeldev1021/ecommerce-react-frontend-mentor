import Navbar from "./Navbar";

const Header = () => {
  return (
    <header >
      <div style={{ width: "80%", margin: "auto" }} className='flex items-center justify-between border-b py-8'>
        <div className="flex items-center w-1/2">
         <img src="./images/logo.svg" alt="logo" />
           <Navbar />
        </div>
       <div className="flex w-32 justify-between items-center">
          <img style={{ width: "20px", height: "20px" }} src="./images/icon-cart.svg" alt="cart" />
          <img style={{ width: "40px" }} src="./images/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
