const routes = ["collections", "men", "women", "about", "contact"];

const Navbar = () => {
  return (
    <nav className='flex list-none justify-between w-full text px-3 pl-5 text-dark-blue'>
       {routes.map(item => <li className="capitalize" key={item}><a href="#">{item}</a></li>)}
    </nav>
  );
};

export default Navbar;
