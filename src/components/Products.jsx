import React from "react";
import { initialProducts } from "../lib/data";
import Title from "./UI/title";

export default function Products() {
  return (
    <div className="bg-gray-100 h-[650px] mx-[100px] ">
      <div id="products" className="mt-10">
        <Title text={"Featured Products"} />
        <div
          id="featured-products"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 mt-10"
        >
          {initialProducts.slice(0, -1).map((product) => (
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
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
