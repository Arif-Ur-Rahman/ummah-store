import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top  */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">DataCrunch</div>
          </Link>
          <p className="">
            Gulshan 1, Gulshan Circular Road, Dhaka, Bangladesh
          </p>
          <span className="font-serif">arif@datacrunch.com</span>
          <span className="font-serif">01680728065</span>
          <div className="flex gap-6">
            <Image
              src="/icons/facebook.png"
              alt="facebook"
              width={16}
              height={16}
            />
            <Image
              src="/icons/youtube.png"
              alt="youtube"
              width={16}
              height={16}
            />
            <Image
              src="/icons/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/icons/x.png" alt="linkedin" width={16} height={16} />
          </div>
        </div>
        {/* Center  */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-md text-lg font-bold">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/deals">Deals</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-md text-lg font-bold">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/shop">Products</Link>
              <Link href="/deals">Men</Link>
              <Link href="/about">Women</Link>
              <Link href="/contact">Kids</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-md text-lg font-bold">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/shop">My Account</Link>
              <Link href="/deals">Find Location</Link>
              <Link href="/about">Legal & Privacy</Link>
              <Link href="/contact">Gift a Card</Link>
            </div>
          </div>
        </div>
        {/* Right  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about fashion, trends,
            promotions and much more
          </p>
          <div className="flex flex-col gap-4">
            {/* Email signup section */}
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-4 w-3/4 border border-gray-300 rounded-l focus:outline-none"
              />
              <button className="w-1/4 bg-red-500 text-white rounded-r hover:bg-red-600 transition-colors">
                JOIN
              </button>
            </div>

            {/* Payment methods section */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-sm text-black bg-gray-300 px-2 py-2 rounded-md">
                Secure Payments
              </span>
              <div className="flex gap-2 justify-center">
                <Image
                  src="/discover.png"
                  alt="discover"
                  width={40}
                  height={20}
                />
                <Image src="/skrill.png" alt="skrill" width={40} height={20} />
                <Image src="/paypal.png" alt="paypal" width={40} height={20} />
                <Image
                  src="/mastercard.png"
                  alt="mastercard"
                  width={40}
                  height={20}
                />
                <Image src="/visa.png" alt="visa" width={40} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Botom  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">@ 2025 DataCrunch</div>
        <div className="FLEX flex-col GAP-8 md:flex-row">
            <div className="">
                <span className="text-gray-500 mr-4">Language</span>
                <span className="font-medium">United States | English</span>
            </div>
            <div className="">
                <span className="text-gray-500 mr-4">Currency</span>
                <span className="font-medium">$ USD</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
