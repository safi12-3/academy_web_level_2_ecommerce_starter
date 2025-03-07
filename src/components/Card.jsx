import PropTypes from "prop-types"; // Import PropTypes to validate the props
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Card = ({
  products,
  count,
  addToFavorites,
  removeFromFavorites,
  favorites,
}) => {
  const { addToCart } = useContext(CartContext);

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
              onClick={() =>
                favorites.some((fav) => fav.id === product.id)
                  ? removeFromFavorites(product)
                  : addToFavorites(product)
              }
              className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              {favorites.some((fav) => fav.id === product.id) ? (
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

// Adding PropTypes validation
Card.propTypes = {
  products: PropTypes.array.isRequired, // 'products' should be an array and is required
  count: PropTypes.number.isRequired, // 'count' should be a number and is required
  addToFavorites: PropTypes.func.isRequired, // 'addToFavorites' should be a function and is required
  removeFromFavorites: PropTypes.func.isRequired, // 'removeFromFavorites' should be a function and is required
  favorites: PropTypes.array.isRequired, // 'favorites' should be an array and is required
};

export default Card;
