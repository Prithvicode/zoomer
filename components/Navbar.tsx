import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import HamburgerNav from "./HamburgerNav";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-bg-1 flex fixed z-50 justify-between py-3 px-9 items-center">
      <Link prefetch={true} href="/" className="flex items-center gap-1 ">
        <Image
          loading="eager"
          src={"/icons8-camera-48.svg"}
          alt="zoomer-logo"
          height={48}
          width={48}
        />
        <h1 className="text-2xl font-bold">Zoomer</h1>
      </Link>

      <div className="flex justify-center items-center gap-5 ">
        <div className="flex items-center">
          {/* Clerk  */}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <HamburgerNav />
      </div>
    </nav>
  );
};

export default Navbar;
