import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faUserTie,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const checkAuthentication = () => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  };

  useEffect(() => {
    checkAuthentication();
  });

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    checkAuthentication();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md h-[65px] flex items-center relative px-6">
      <div className="flex w-full justify-between items-center mx-10">
        <div className="flex items-center gap-10">
          <Link className="text-xl font-bold text-gray-900" to="/">
            ShopHub
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              className="text-gray-900 hover:text-gray-500 text-sm font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-500 text-sm font-medium"
              to="/categories"
            >
              Categories
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-500 text-sm font-medium"
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden md:block w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-4">
            <Link to="/favorites">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-600 text-xl"
              />
            </Link>
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-gray-600 text-xl"
              />
            </Link>

            {!isAuthenticated ? (
              <Link to="/login">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="text-gray-600 text-xl"
                />
              </Link>
            ) : (
              <button onClick={handleLogout} className="text-gray-600 text-xl">
                Sign Out
              </button>
            )}

            <button
              className="md:hidden text-gray-600 text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-[65px] left-0 right-0 bg-white shadow-md z-10`}
      >
        <Link
          className="block px-4 py-2 text-gray-900 hover:text-gray-500 text-sm font-medium"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          className="block px-4 py-2 text-gray-900 hover:text-gray-500 text-sm font-medium"
          to="/categories"
          onClick={() => setIsMenuOpen(false)}
        >
          Categories
        </Link>
        <Link
          className="block px-4 py-2 text-gray-900 hover:text-gray-500 text-sm font-medium"
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 mt-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;
