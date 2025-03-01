import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-[65px] flex items-center">
      <div id="nav-components" className="flex w-full justify-center gap-[35%]">
        <div id="slugs" className="flex gap-6 items-center space-x-4">
          <Link className="text-xl font-bold text-gray-800" to="/">
            ShopHub
          </Link>
          <Link
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            to="/categories"
          >
            Categories
          </Link>
          <Link
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4 gap-7">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:pl-2.5"
          />

          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} className="text-gray-600 text-xl" />
          </Link>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link to="/auth">
            <FontAwesomeIcon icon={faUserTie} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
