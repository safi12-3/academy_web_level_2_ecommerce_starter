import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";

const Card = ({
  products,
  count,
  addToFavorites,
  removeFromFavorites,
  favorites,
}) => {
  const { addToCart } = useContext(CartContext);

  // For handling the state of favorites when the user is logged out
  const [localFavorites, setLocalFavorites] = useState(() => {
    // Load from localStorage for logged-out users
    return JSON.parse(localStorage.getItem("savedFavorites")) || [];
  });

  // This function handles toggling the heart icon for logged-out users
  const handleFavoriteToggle = (product) => {
    const isAlreadyFavorited = localFavorites.some(
      (item) => item.id === product.id
    );

    if (isAlreadyFavorited) {
      const updatedFavorites = localFavorites.filter(
        (item) => item.id !== product.id
      );
      setLocalFavorites(updatedFavorites);
      localStorage.setItem("savedFavorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...localFavorites, product];
      setLocalFavorites(updatedFavorites);
      localStorage.setItem("savedFavorites", JSON.stringify(updatedFavorites));
    }
  };

  useEffect(() => {
    // If the user is logged in, save the favorites in localStorage
    if (localStorage.getItem("isAuthenticated") === "true") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

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
              onClick={() => {
                // If the user is logged in, use the provided functions
                if (localStorage.getItem("isAuthenticated") === "true") {
                  favorites.some((fav) => fav.id === product.id)
                    ? removeFromFavorites(product)
                    : addToFavorites(product);
                } else {
                  // For logged-out users, toggle heart icon in localStorage
                  handleFavoriteToggle(product);
                }
              }}
              className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              {localStorage.getItem("isAuthenticated") === "true" ? (
                favorites.some((fav) => fav.id === product.id) ? (
                  <FaHeart className="w-5 h-5 text-red-500" />
                ) : (
                  <FaRegHeart className="w-5 h-5 text-gray-600" />
                )
              ) : localFavorites.some((fav) => fav.id === product.id) ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <FaRegHeart className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
