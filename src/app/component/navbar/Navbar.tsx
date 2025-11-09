"use client";

import Link from "next/link";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Menu from "./Menu";

export const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 xl:px-16 2xl:px-32 shadow-sm border-b bg-white/80 backdrop-blur-md relative z-50">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between relative md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide font-bold">DataCrunch</div>
        </Link>
        <Menu />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex h-full items-center justify-between gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={30} height={30} />
              <span className="text-2xl tracking-wide font-bold">
                DataCrunch
              </span>
            </div>
          </Link>
          <div className="hidden xl:flex gap-6 font-bold text-black">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
