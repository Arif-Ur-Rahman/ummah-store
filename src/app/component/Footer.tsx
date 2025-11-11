import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-900 text-gray-300 mt-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-16 mb-12">
        {/* Left - Brand Info */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <Link href="/" className="group">
            <div className="text-2xl tracking-wide font-bold text-white group-hover:text-red-500 transition-colors">
              DataCrunch
            </div>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Gulshan 1, Gulshan Circular Road<br />
            Dhaka, Bangladesh
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              arif@datacrunch.com
            </span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              +880 1680 728065
            </span>
          </div>
          <div className="flex gap-4 mt-2">
            {["facebook", "youtube", "instagram", "x"].map((platform) => (
              <div
                key={platform}
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-colors cursor-pointer"
              >
                <Image
                  src={`/icons/${platform}.png`}
                  alt={platform}
                  width={16}
                  height={16}
                  className="filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden lg:flex justify-between w-1/2">
          {[
            {
              title: "COMPANY",
              links: ["Home", "Shop", "Deals", "About", "Contact"]
            },
            {
              title: "SHOP", 
              links: ["New Arrivals", "Products", "Men", "Women", "Kids"]
            },
            {
              title: "HELP",
              links: ["Customer Service", "My Account", "Find Location", "Legal & Privacy", "Gift a Card"]
            }
          ].map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h2 className="font-semibold text-white text-lg mb-2">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right - Newsletter & Payments */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h2 className="font-semibold text-white text-lg">STAY UPDATED</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Be the first to get the latest news about fashion, trends,
            promotions and much more
          </p>
          
          {/* Newsletter Signup */}
          <div className="flex flex-col gap-4">
            <div className="flex rounded-lg overflow-hidden shadow-lg border border-gray-600">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="px-6 bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors whitespace-nowrap shadow-md">
                SUBSCRIBE
              </button>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Secure Payments
              </span>
              <div className="flex gap-3 flex-wrap">
                {["discover", "skrill", "paypal", "mastercard", "visa"].map((payment) => (
                  <div
                    key={payment}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Image
                      src={`/${payment}.png`}
                      alt={payment}
                      width={32}
                      height={16}
                      className="filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700">
        <div className="text-gray-400 text-sm">
          © 2025 DataCrunch. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Language</span>
            <span className="text-white font-medium">United States | English</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Currency</span>
            <span className="text-white font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;