import { useLocation } from "react-router-dom";
import { initialProducts } from "../lib/data";
import Card from "../components/Card";
import Criterias from "../components/Criterias";

const CategoriesPage = () => {
  const location = useLocation();
  const { category } = location.state || {};

  // Filter products based on the selected category
  const filteredProducts = category
    ? initialProducts.filter((product) => product.category.includes(category))
    : initialProducts;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Shop by Category</h1>
        <Criterias />
        <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card products={filteredProducts} count={5} />
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
