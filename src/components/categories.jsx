import { useNavigate } from "react-router-dom";
import { featured_categories } from "../lib/data";
import Title from "./UI/title";

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate("/categories", { state: { category } });
  };

  return (
    <div id="categories" className="flex flex-col gap-5">
      <Title text={"Featured Categories"} />

      <div className="flex justify-center gap-10 mt-10">
        {featured_categories.map((category) => (
          <div
            key={category.id}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              className="w-full h-64 object-cover"
              src={category.image_src}
              alt={category.name}
            />

            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <h2 className="text-white text-2xl font-semibold">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
