import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/categories";
import CategoriesPage from "./pages/CategoriesPage";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={""} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
