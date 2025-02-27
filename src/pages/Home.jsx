import HeroSection from "../components/heroSection";
import Categories from "../components/categories";
import Products from "../components/Products";
import CategoriesPage from "../pages/CategoriesPage";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Categories />
      <Products />
      <CategoriesPage />
    </div>
  );
}
