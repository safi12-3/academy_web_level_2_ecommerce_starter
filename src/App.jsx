import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/categories";
import CategoriesPage from "./pages/CategoriesPage";
import Home from "./pages/home";
import Contact from "./pages/Contact";

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
          <Route path="favorites" element={""} />
          <Route path="cart" element={""} />
          <Route path="auth" element={""} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
