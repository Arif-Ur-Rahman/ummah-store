"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Settings, ShoppingBag, LogOut } from "lucide-react";

export default function ProfileDropdown() {
  return (
    <div className="absolute top-12 left-[-150px] w-56 bg-white shadow-2xl rounded-xl border border-gray-100 z-50 overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/profile.png"
            alt="User"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-800">Arif Ur Rahman</span>
          <span className="text-xs text-gray-500">View Profile</span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex flex-col p-2">
        
        <Link
          href="/profile"
          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition text-gray-700 text-sm"
        >
          <User className="w-4 h-4" /> My Profile
        </Link>

        <Link
          href="/orders"
          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition text-gray-700 text-sm"
        >
          <ShoppingBag className="w-4 h-4" /> My Orders
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition text-gray-700 text-sm"
        >
          <Settings className="w-4 h-4" /> Settings
        </Link>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Logout */}
      <button
        className="flex items-center gap-2 w-full p-2 text-sm text-red-600 hover:bg-red-50 transition font-medium"
        onClick={() => console.log("Logout")}
      >
        <LogOut className="w-4 h-4" /> Logout
      </button>

    </div>
  );
}
