import { useState, useEffect } from "react";
import { initialProducts } from "../lib/data";
import Card from "./Card";
import Title from "./UI/title";

export default function Products() {
  const [favorites, setFavorites] = useState(() => {
    // Get favorites from localStorage or use an empty array if not found
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Sync favorites with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to add a product to favorites
  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };

  // Function to remove a product from favorites
  const removeFromFavorites = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== product.id)
    );
  };

  return (
    <div className="bg-gray-100 h-[650px] mx-[100px]">
      <div id="products" className="mt-10">
        <Title text={"Featured Products"} />
        <div
          id="featured-products"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mt-10"
        >
          <Card
            products={initialProducts}
            count={4} // Show only the first 4 products
            favorites={favorites} // Pass current favorites state
            addToFavorites={addToFavorites} // Function to add to favorites
            removeFromFavorites={removeFromFavorites} // Function to remove from favorites
          />
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 cursor-pointer">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
