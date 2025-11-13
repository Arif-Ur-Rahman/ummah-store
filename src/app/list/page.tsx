import Image from "next/image";
import Filter from "../component/list/Filter";
import ProductList from "../component/home/ProductList";

const List = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign  */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700 ">Grab up to 50% off on 
           selected Products</h1>
          <button className="mt-4 px-5 py-3 bg-red-500 hover:bg-red-600 rounded-3xl text-white text-sm">Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      {/* Products  */}
      <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
      <ProductList />

    </div>
  );
};

export default List;
