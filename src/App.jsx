import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/categories";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories" element={<Categories />} />
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
