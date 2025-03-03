import { useNavigate } from "react-router-dom";
import { featured_categories } from "../lib/data";
import Title from "./UI/title";

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/categories", { state: { category } });
  };

  return (
    <div id="categories" className="flex flex-col gap-5 items-center">
      {/* Title */}
      <Title text={"Featured Categories"} />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-4 place-items-center">
        {featured_categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs w-full"
            onClick={() => handleCategoryClick(category.name)}
          >
            {/* Image Container */}
            <div className="w-full flex justify-center items-center">
              <img
                className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg"
                src={category.image_src}
                alt={category.name}
              />
            </div>

            {/* Overlay with Category Name */}
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center px-4">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
