import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long", // e.g. Wednesday
    year: "numeric", // 2025
    month: "long", // November
    day: "numeric", // 12
  });

  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-900 text-gray-300 mt-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-16 mb-12">
        {/* Left - Brand Info */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <Link href="/" className="group">
            <h2 className="text-2xl tracking-wide font-bold text-white group-hover:text-red-500 transition-colors">
              DataCrunch
            </h2>
          </Link>

          <address className="not-italic text-gray-400 leading-relaxed">
            Gulshan 1, Gulshan Circular Road<br />
            Dhaka, Bangladesh
          </address>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:arif@datacrunch.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              arif@datacrunch.com
            </a>
            <a
              href="tel:+8801680728065"
              className="text-gray-400 hover:text-white transition-colors"
            >
              +880 1680 728065
            </a>
          </div>

          <div className="flex gap-4 mt-2">
            {["facebook", "youtube", "instagram", "x"].map((platform) => (
              <button
                key={platform}
                aria-label={platform}
                className="p-2 bg-gray-800 rounded-lg hover:bg-red-500 transition-colors"
              >
                <Image
                  src={`/icons/${platform}.png`}
                  alt={platform}
                  width={16}
                  height={16}
                  className="filter brightness-0 invert"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden lg:flex justify-between w-1/2">
          {[
            {
              title: "COMPANY",
              links: ["Home", "Shop", "Deals", "About", "Contact"],
            },
            {
              title: "SHOP",
              links: ["New Arrivals", "Products", "Men", "Women", "Kids"],
            },
            {
              title: "HELP",
              links: [
                "Customer Service",
                "My Account",
                "Find Location",
                "Legal & Privacy",
                "Gift a Card",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h3 className="font-semibold text-white text-lg mb-2">
                {section.title}
              </h3>
              <nav className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Right - Newsletter & Payments */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
          <h3 className="font-semibold text-white text-lg">STAY UPDATED</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Be the first to get the latest news about fashion, trends,
            promotions, and much more.
          </p>

          {/* Newsletter Signup */}
          <form className="flex flex-col gap-4">
            <div className="flex rounded-lg overflow-hidden shadow-lg border border-gray-600">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="px-6 bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors whitespace-nowrap shadow-md"
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Secure Payments
              </span>
              <div className="flex gap-3 flex-wrap">
                {["discover", "skrill", "paypal", "mastercard", "visa"].map(
                  (payment) => (
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
                  )
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700">
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {currentDate.getFullYear()} DataCrunch. All rights reserved —{" "}
          <span className="text-gray-500 text-xs">{formattedDate}</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Language</span>
            <span className="text-white font-medium">
              United States | English
            </span>
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
