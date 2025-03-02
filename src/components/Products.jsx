import React from "react";
import { initialProducts } from "../lib/data";
import Card from "./Card";
import Title from "./UI/title";

export default function Products() {
  return (
    <div className="bg-gray-100 h-auto mx-4 sm:mx-8 md:mx-16 lg:mx-[100px]">
      <div id="products" className="mt-10">
        {/* Title */}
        <Title text={"Featured Products"} />

        {/* Featured Products Grid */}
        <div
          id="featured-products"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10"
        >
          <Card  products={initialProducts} count={4}/>
          {/* Active Section */}
          {/* {initialProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="shadow-md bg-white rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
            >
           
              <img
                src={product.image_url}
                className="w-full h-48 sm:h-56 object-cover"
                alt={product.name}
              />
             
              <div className="p-4 flex flex-col gap-2">
                <h1 className="font-bold text-base sm:text-lg">{product.name}</h1>
                <h2 className="text-gray-600 text-sm sm:text-base">
                  {product.description}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm sm:text-base">
                    ${product.price}
                  </p>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))} */}

          {/* Commented Section */}
          {/* {initialProducts.slice(0, -1).map((product) => (
            <div
              id="product-card"
              key={product.id}
              className="shadow-md bg-white rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image_url}
                className="w-full h-56 object-cover"
                alt={product.name}
              />
              <div id="item-info" className="p-4 flex flex-col gap-2">
                <h1 className="font-bold">{product.name}</h1>
                <h2 className="text-gray-600">{product.description}</h2>

                <div className="flex justify-between items-center">
                  <p className="font-bold">${product.price}</p>
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))} */}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center mt-6">
          <a href="./categories">
            <button className="px-4 py-2 text-sm sm:text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 cursor-pointer mb-10">
              View All Products
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}