import { useLocation, useNavigate } from "react-router-dom";
import { initialProducts } from "../lib/data";
import Card from "../components/Card";
import Criterias from "../components/Criterias";
import { useState, useEffect } from "react";

const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state || {};

  const [favorites, setFavorites] = useState(() => {
    // Load favorites from localStorage (logged-in users)
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const [localFavorites, setLocalFavorites] = useState(() => {
    // Load localFavorites for logged-out users from localStorage
    return JSON.parse(localStorage.getItem("savedFavorites")) || [];
  });

  useEffect(() => {
    // Save logged-in favorites to localStorage
    if (isAuthenticated) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isAuthenticated]);

  const addToFavorites = (product) => {
    if (isAuthenticated) {
      if (!favorites.some((item) => item.id === product.id)) {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
      }
    } else {
      // If the user is not authenticated, manage favorites in localStorage
      const savedFavorites =
        JSON.parse(localStorage.getItem("savedFavorites")) || [];
      if (!savedFavorites.some((item) => item.id === product.id)) {
        savedFavorites.push(product);
        localStorage.setItem("savedFavorites", JSON.stringify(savedFavorites));
      }
    }
  };

  const removeFromFavorites = (product) => {
    if (isAuthenticated) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((item) => item.id !== product.id)
      );
    } else {
      // Handle remove for logged-out users
      const savedFavorites =
        JSON.parse(localStorage.getItem("savedFavorites")) || [];
      const updatedFavorites = savedFavorites.filter(
        (item) => item.id !== product.id
      );
      localStorage.setItem("savedFavorites", JSON.stringify(updatedFavorites));
      setLocalFavorites(updatedFavorites);
    }
  };

  const handleFavoriteToggle = (product) => {
    // Toggle favorite for logged-out users
    const isAlreadyFavorited = localFavorites.some(
      (item) => item.id === product.id
    );
    if (isAlreadyFavorited) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

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
          favorites={isAuthenticated ? favorites : localFavorites} // Use localFavorites for logged-out users
          addToFavorites={
            isAuthenticated ? addToFavorites : handleFavoriteToggle
          } // Use handleFavoriteToggle for logged-out users
          removeFromFavorites={
            isAuthenticated ? removeFromFavorites : handleFavoriteToggle
          } // Use handleFavoriteToggle for logged-out users
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
