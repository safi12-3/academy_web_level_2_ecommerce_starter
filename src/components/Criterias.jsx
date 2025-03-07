import PropTypes from "prop-types";

const Criterias = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  selectedCategory,
  setSelectedCategory,
  onSearchChange,
}) => {
  return (
    <div className="criterias grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-10 border-4 border-white rounded-lg shadow-sm mb-8">
      <div className="category">
        <label className="block text-sm text-gray-700 font-medium mb-2">
          Category:
        </label>
        <select
          name="categories"
          id="categories"
          className="w-full border-4 border-white rounded-lg shadow-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
          <option value="Home">Home</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>
      <div className="price-range">
        <label className="block text-sm text-gray-700 font-medium mb-2">
          Price Range
        </label>
        <div className="flex space-x-2">
          <input
            className="border-4 border-white rounded-lg shadow-sm"
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            className="border-4 border-white rounded-lg shadow-sm"
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="search ">
        <label className="block text-sm text-gray-700 font-medium mb-2">
          Search
        </label>
        <input
          className="flex space-x-2 border-4 border-white rounded-lg shadow-sm"
          type="search"
          id="searchBar"
          placeholder="Search products..."
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
};

// Add PropTypes validation
Criterias.propTypes = {
  minPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setMinPrice: PropTypes.func.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Criterias;
