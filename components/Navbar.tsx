import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-full bg-bg-1 flex fixed z-10 justify-between py-2 px-9 ">
      <Link href="/" className="flex items-center gap-1">
        <p className="">ZooMer</p>
      </Link>

      <div className="">
        {/* Clerk  */}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
