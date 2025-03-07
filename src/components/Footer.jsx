import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          <div className="flex-1 w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">ShopHub</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Your one-stop shop for all your products
            </p>
          </div>
          <div className="flex-1 w-full sm:w-auto">
            <h2 className="text-base sm:text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-1 text-sm sm:text-base text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-1 text-sm sm:text-base text-gray-400">
              <li>123 Main Street</li>
              <li>City, Country</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: support@shophub.com</li>
            </ul>
          </div>

          <div className="flex-1 w-full sm:w-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-600">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm sm:text-base">
          <p>&copy; 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
