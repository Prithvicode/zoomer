"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { sideBarLinks } from "@/constants/links";

const HamburgerNav = () => {
  const path = usePathname();
  return (
    <section className="w-full max-w-[200px] ">
      <Sheet>
        {/* <SheetTitle>Menu</SheetTitle> */}
        <SheetTrigger asChild>
          <Image
            alt="hamrburgericon"
            src={"/hamburger.svg"}
            width={36}
            height={36}
            className="sm:hidden text-black cursor-pointer "
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-bg-1">
          {/* Logo Link */}
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
          <section className="flex flex-col gap-3 mt-4">
            {sideBarLinks.map((link, idx) => {
              const isActive =
                path === link.route || path.startsWith(`${link.route}/`);
              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    href={link.route}
                    key={idx}
                    className={cn("flex gap-3 p-4 rounded-lg items-center", {
                      "bg-blue-400": isActive,
                    })}
                  >
                    <Image
                      src={link.image}
                      width={48}
                      height={48}
                      alt={link.label}
                    />
                    <p className="font-bold text-lg">{link.label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </section>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default HamburgerNav;
