import { FaRegHeart, FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Card = ({
  products,
  count,
  addToFavorites,
  removeFromFavorites,
  favorites,
}) => {
  // Sync favorites state with localStorage whenever it changes for logged-out users
  const [savedFavorites, setSavedFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("savedFavorites")) || [];
  });

  useEffect(() => {
    // Sync localStorage with the favorites array
    localStorage.setItem("savedFavorites", JSON.stringify(savedFavorites));
  }, [savedFavorites]);

  // Function to check if a product is a favorite
  const isFavorite = (product) => {
    if (!localStorage.getItem("isAuthenticated")) {
      // When logged out, check savedFavorites in localStorage
      return savedFavorites.some((item) => item.id === product.id);
    }
    // When logged in, check favorites prop
    return favorites.some((item) => item.id === product.id);
  };

  const handleFavoriteClick = (product) => {
    if (!localStorage.getItem("isAuthenticated")) {
      // When logged out, add/remove from savedFavorites in localStorage
      if (!isFavorite(product)) {
        setSavedFavorites((prevFavorites) => [...prevFavorites, product]);
      } else {
        setSavedFavorites((prevFavorites) =>
          prevFavorites.filter((item) => item.id !== product.id)
        );
      }
    } else {
      // When logged in, add/remove from favorites array passed as props
      if (isFavorite(product)) {
        removeFromFavorites(product); // Remove from favorites
      } else {
        addToFavorites(product); // Add to favorites
      }
    }
  };

  return (
    <>
      {products.slice(0, count).map((product) => (
        <div
          key={product.id}
          className="card bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => handleFavoriteClick(product)} // Handle click
              className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 cursor-pointer"
            >
              {isFavorite(product) ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <FaRegHeart className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">
                ${product.price.toFixed(2)}
              </span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Card.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  count: PropTypes.number.isRequired,
  favorites: PropTypes.array.isRequired, // Ensure this prop is always passed as an array
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default Card;
