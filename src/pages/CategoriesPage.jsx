import { useLocation, useNavigate } from "react-router-dom";
import { initialProducts } from "../lib/data";
import Card from "../components/Card";
import Criterias from "../components/Criterias";
import { useState, useEffect } from "react";

const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  // Initialize state for favorites
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Update localStorage whenever favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add to favorites
  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };

  // Remove from favorites
  const removeFromFavorites = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== product.id)
    );
  };

  // Filter products based on the selected category
  const filteredProducts = category
    ? initialProducts.filter((product) => product.category.includes(category))
    : initialProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Shop by Category</h1>
      <Criterias />
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          products={filteredProducts}
          count={5}
          favorites={favorites} // Make sure favorites is passed here
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      </div>
      <div className="mt-6">
        <button
          onClick={() => navigate("/favorites")}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Favorites
        </button>
      </div>
    </div>
  );
};

export default CategoriesPage;
