"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NavIcons() {
    const router = useRouter();

    const isLoggedIn = false

    const hendleProfile = () => {
        if(!isLoggedIn) {
            router.push('/login')
        }
    }

    
    
  const [IsProfileOpen, setIsProfileOpen] = useState(false);
  const [IsCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src={"/profile.png"}
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={hendleProfile}
      />
      {IsProfileOpen && (
        <div className="">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        alt="notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src={"/cart.png"}
        alt="cart"
        width={22}
        height={22}
        className="cursor-pointer"
      />
    </div>
  );
}

export default NavIcons;
