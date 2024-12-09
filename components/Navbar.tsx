import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import HamburgerNav from "./HamburgerNav";

const Navbar = () => {
  return (
    <nav className="w-full bg-bg-1 flex fixed z-10 justify-between py-3 px-9 items-center">
      <Link href="/" className="flex items-center gap-1">
        <p className="">ZooMer</p>
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
