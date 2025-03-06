import { useState, useEffect } from "react";
import { initialProducts } from "../lib/data";
import Card from "./Card";
import Title from "./UI/Title";

export default function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Fetch products (ensure data.json is in /public/)
  async function getProducts() {
    try {
      const response = await fetch("/data.json");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (product) => {
    setFavorites(favorites.filter((item) => item.id !== product.id));
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
            products={products}
            count={4}
            favorites={favorites}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
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
