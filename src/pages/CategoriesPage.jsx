const CategoriesPage = () => {
  return (
    <>
      <header>Header</header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Shop by Category</h1>
        <div className="criterias grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-10 border-4 border-white rounded-lg shadow-sm">
          <div className="category">
            <label className="block text-sm text-gray-700 font-medium mb-2">
              Category:
            </label>
            <select
              name="categories"
              id="categories"
              className="w-full border-4 border-white rounded-lg shadow-sm"
            >
              <option value="" selected>
                All Categories
              </option>
              <option value="electronics">Electronics</option>
              <option value="sports">Sports</option>
              <option value="home">Home</option>
              <option value="accessories">Accessories</option>
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
                id="price"
              />
              <input
                className="border-4 border-white rounded-lg shadow-sm"
                type="number"
                placeholder="Max"
                id="price"
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
