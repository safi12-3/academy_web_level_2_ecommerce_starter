import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites((prevFavorites) => {
        const updatedFavorites = [...prevFavorites, product];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    }
  };

  const removeFromFavorites = (product) => {
    const updatedFavorites = favorites.filter((item) => item.id !== product.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {favorites.length > 0 && (
        <h1 className="text-3xl font-bold">Your Favorite Items</h1>
      )}
      {favorites.length === 0 ? (
        <div className="text-center">
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            No favorites yet
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Start adding some items to your favorites!
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/categories")}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse Products
            </button>
          </div>
        </div>
      ) : (
        <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card
            products={favorites}
            count={favorites.length}
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        </div>
      )}
    </div>
  );
};

export default Favorites;
