import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash } from "lucide-react";
import { initialProducts } from "../lib/data";

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // If cart is empty, show empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <ShoppingCart className="w-12 h-12 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500">Start adding some items to your cart!</p>
        <Link to="/categories">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Browse Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-6xl mx-auto p-6 flex-1">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const product = initialProducts.find((p) => p.id === item.id);
              return (
                <div key={item.id} className="flex items-center p-4 bg-white shadow-md rounded-lg">
                  <img
                    src={product?.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {/* Decrease Button */}
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 border rounded-lg"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    {/* Increase Button */}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-semibold text-lg ml-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  {/* Remove Button */}
                  <button
                    className="ml-4 text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Order Summary Section */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© 2024 E-Commerce App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Cart;
