"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/slides/slide1.png",
    title: "Spring Sale Collection",
    description: "Up to 50% off!",
    bg: "bg-gradient-to-r from-pink-50 to-yellow-50",
    url: "/shop",
  },
  {
    id: 2,
    image: "/slides/slide2.webp",
    title: "New Arrivals",
    description:
      "Check out our New Arrivals for the season. Fresh styles and designs just for you!",
    bg: "bg-gradient-to-r from-green-50 to-blue-50",
    url: "/shop",
  },
  {
    id: 3,
    image: "/slides/slide3.webp",
    title: "Exclusive Offers",
    description:
      "Don't miss our Exclusive Offers on top brands. Limited time only!",
    bg: "bg-gradient-to-r from-purple-50 to-pink-50",
    url: "/shop",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length-1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden z-10 relative">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}> 
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* Text Contant  */}
            <div
              className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center"
              key={slide.id}
            >
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl ">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white px-4 py-3 ">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Image Content  */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
        {/* Slider Controls */}
        <div className="absolute m-auto left-1/2 bottom-8 gap-4 flex">
          {slides.map((slide, index) => (
            <div
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
              }`}
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
