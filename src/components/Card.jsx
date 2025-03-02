import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ products, count }) => {
  const productsToShow = products.slice(0, count);
  return (
    <>
      {productsToShow.map((product) => (
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
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 cursor-pointer">


              <FaRegHeart className="w-5 h-5 text-gray-600" />



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
};

export default Card;
