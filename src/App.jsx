import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import CategoriesPage from "./pages/CategoriesPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Context/Cart";
 

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/list" element={<Categories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
