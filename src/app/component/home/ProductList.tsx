import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div>
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="/products/product1.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="/products/product2.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$29.99</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 text-xs py-2 px-4 hover:bg-red-500 hover:text-white">Add to Cart</button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="/products/product1.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="/products/product2.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$29.99</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 text-xs py-2 px-4 hover:bg-red-500 hover:text-white">Add to Cart</button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="/products/product1.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="/products/product2.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$29.99</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 text-xs py-2 px-4 hover:bg-red-500 hover:text-white">Add to Cart</button>
        </Link>

        <Link
          href="/test"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="/products/product1.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="/products/product2.png"
              alt="product"
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$29.99</span>
          </div>
          <div className="text-sm text-gray-500">My Description</div>
          <button className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 text-xs py-2 px-4 hover:bg-red-500 hover:text-white">Add to Cart</button>
        </Link>

       
       

       

       
      </div>
    </div>
  );
};

export default ProductList;
