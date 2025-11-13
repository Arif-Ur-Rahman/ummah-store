const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Min Price"
          className="text-xs font-medium pl-2 w-24 rounded-2xl ring-1 ring-gray-300"
        />
        <input
          type="text"
          name="max"
          placeholder="Max Price"
          className="text-xs font-medium pl-2 w-24 rounded-2xl ring-1 ring-gray-300"
        />
        <select name="color" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
            <option>Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="white">White</option>
        </select>
        <select name="ribbon" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
            <option>Category</option>
            <option value="new">New</option>
            <option value="sale">Sale</option>
            <option value="featured">Featured</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Sort By</option>
            <option value="lowtohigh">Price: Low to High</option>
            <option value="hightolow">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
            <option value="oldest">Oldest</option>
        </select>



      </div>
    </div>
  );
};

export default Filter;
