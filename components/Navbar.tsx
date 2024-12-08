import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="">
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
