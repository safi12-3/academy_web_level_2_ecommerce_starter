import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Flexbox for a Single Row Layout */}
        <div className="flex justify-between items-start gap-8">
          {/* Shop Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-400">Your one-stop shop for all your products</p>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Categories</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-1 text-gray-400">
              <li>123 Main Street</li>
              <li>City, Country</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: support@shophub.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-pink-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-blue-600"><Facebook size={24} /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
