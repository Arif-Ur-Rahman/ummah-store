"use client";

import Image from "next/image";
import React from "react";

export const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-2xl border border-gray-100 bg-white top-12 right-0 flex flex-col z-50 gap-6">
      {!cartItems ? (
        <div className="">Cart Is Empty...</div>
      ) : (
        <>
        <h1 className="text-xl font-bold rounded-md  py-2 px-3">Shoping Cart</h1>
          <div className="flex flex-col gap-8">
            {/* Item  */}
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top  */}
                <div className="">
                  {/* Title  */}
                  <div
                    className="flex justify-between 
                        items-center gap-8"
                  >
                    <h3 className="font-semibold ">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm ">499 Tk</div>
                  </div>
                  {/* Desc  */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* Bottom  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Qty. 2</span>
                  <span className="text-red-600">Remove</span>
                </div>
              </div>
            </div>
            {/* Item  */}
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top  */}
                <div className="">
                  {/* Title  */}
                  <div
                    className="flex justify-between 
                        items-center gap-8"
                  >
                    <h3 className="font-semibold ">Product Arif</h3>
                    <div className="p-1 bg-gray-50 rounded-sm ">499 Tk</div>
                  </div>
                  {/* Desc  */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* Bottom  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-700">Qty. 2</span>
                  <span className="text-red-600">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Subtotal  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold text-base">
              <span className="">Subtotal</span>
              <span className="">999 Tk</span>
            </div>
            <p className="text-blue-700 items-center text-sm mt-2 mb-4">
              Cash On Delivery is also available{" "}
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-2 px-3 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md bg-black text-white font-bold py-2 px-3">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
