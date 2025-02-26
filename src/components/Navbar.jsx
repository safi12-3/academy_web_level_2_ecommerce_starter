import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"; // Import the icon
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUserTie} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-[65px] flex items-center">
      <div id="nav-components" className="flex w-full justify-center gap-[35%]">
        <div id="slugs" className="flex gap-6 items-center space-x-4">
          <a className="text-xl font-bold text-gray-800" href="#">
            ShopHub
          </a>
          <a
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            href="#"
          >
            Home
          </a>
          <a
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            href="#"
          >
            Categories
          </a>
          <a
            className="text-gray-900 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center space-x-4 gap-7 ">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:pl-2.5"
          />
          
          <FontAwesomeIcon icon={faHeart} className="text-gray-600 text-xl" />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUserTie} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
