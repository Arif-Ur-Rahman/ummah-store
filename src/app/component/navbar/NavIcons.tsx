"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import CartModal from "./CartModal";
import NotificationDropdown from "./Notification";
import ProfileDropdown from "./ProfileDropdown";

function NavIcons() {
  const [IsProfileOpen, setIsProfileOpen] = useState(false);
  const [IsNotificationOpen, setIsNotificationOpen] = useState(false);
  const [IsCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = true; // Replace later with real auth

  // refs for outside click
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  // **Handle Profile toggle**
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setIsProfileOpen((prev) => !prev);
    setIsNotificationOpen(false);
    setIsCartOpen(false);
  };

  // **Handle Notification toggle**
  const viewNotification = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setIsNotificationOpen((prev) => !prev);
    setIsProfileOpen(false);
    setIsCartOpen(false);
  };

  // **Close dropdowns when clicking outside**
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }

      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }

      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4 relative relative z-50">

      {/* PROFILE */}
      <div ref={profileRef} className="relative">
        <Image
          src="/profile.png"
          alt="profile"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleProfile}
        />

        {IsProfileOpen && <ProfileDropdown />}
      </div>

      {/* NOTIFICATION */}
      <div ref={notificationRef} className="relative">
        <Image
          src="/notification.png"
          alt="notification"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={viewNotification}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-800 rounded-full text-white text-sm flex items-center justify-center font-bold">
          3
        </div>

        {IsNotificationOpen && <NotificationDropdown />}
      </div>

      {/* CART */}
      <div ref={cartRef} className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt="cart"
          width={22}
          height={22}
          onClick={() => {
            setIsCartOpen((prev) => !prev);
            setIsNotificationOpen(false);
            setIsProfileOpen(false);
          }}
        />

        <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full text-white text-sm flex items-center justify-center font-bold">
          2
        </div>

        {IsCartOpen && <CartModal />}
      </div>
    </div>
  );
}

export default NavIcons;
