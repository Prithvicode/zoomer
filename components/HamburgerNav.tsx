"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { sideBarLinks } from "@/constants/links";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const HamburgerNav = () => {
  const path = usePathname();
  return (
    <section className="w-full max-w-[200px] ">
      <Sheet>
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

          <Link href={"/"} className="p-4 p">
            Zoomer
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
                      width={20}
                      height={20}
                      alt={link.label}
                    />
                    <p className="font-semibold">{link.label}</p>
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
