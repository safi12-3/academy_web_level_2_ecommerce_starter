import Criterias from "../components/Criterias";
import Card from "../components/Card";
const CategoriesPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Shop by Category</h1>
        <Criterias />
        <Card />
      </div>
    </>
  );
};

export default CategoriesPage;
