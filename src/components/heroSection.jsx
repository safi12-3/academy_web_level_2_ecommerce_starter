import React from "react";
import home_image from "../assets/home_image.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HeroSection = () => {
  const navigate = useNavigate();

  const startShopping = () => {
    navigate("/categories");
  };

  return (
    <div>
      <div className="relative w-full h-[600px] md:h-[700px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${home_image})` }}
        ></div>

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-start ml-10 space-y-4 md:left-[13%] sm:items-center sm:ml-0 sm:text-center"
        >
          {/* Title */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold">
            Welcome to ShopHub
          </h1>

          {/* Description */}
          <p className="text-white text-base sm:text-lg md:text-2xl">
            Discover amazing products at great prices
          </p>

          {/* Button */}
          <button
            onClick={startShopping}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-lg font-semibold flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;