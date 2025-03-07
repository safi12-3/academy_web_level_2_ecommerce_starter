import { useLocation, useNavigate } from "react-router-dom";
import { initialProducts } from "../lib/data";
import Card from "../components/Card";
import Criterias from "../components/Criterias";
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

const CategoriesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category: initialCategory } = location.state || {};

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const [localFavorites, setLocalFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("savedFavorites")) || [];
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || ""
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
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
    const isAlreadyFavorited = localFavorites.some(
      (item) => item.id === product.id
    );
    if (isAlreadyFavorited) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  // Debounced search handler
  const handleSearch = useCallback(
    debounce((query) => {
      setSearchQuery(query);
    }, 300),
    []
  );

  // Filter products based on category, price range, and search query
  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "" || product.category.includes(selectedCategory);
    const matchesPrice =
      (minPrice === "" || product.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || product.price <= parseFloat(maxPrice));
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Shop by Category</h1>
      <Criterias
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onSearchChange={(e) => handleSearch(e.target.value)}
      />
      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card
          products={filteredProducts}
          count={5}
          favorites={isAuthenticated ? favorites : localFavorites}
          addToFavorites={
            isAuthenticated ? addToFavorites : handleFavoriteToggle
          }
          removeFromFavorites={
            isAuthenticated ? removeFromFavorites : handleFavoriteToggle
          }
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
