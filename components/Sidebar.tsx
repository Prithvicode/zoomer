"use client";
import { sideBarLinks } from "@/constants/links";
import { cn } from "@/lib/utils";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const path = usePathname();
  return (
    <section className="sticky left-0 top-0 h-screen p-6 sm:px-5  flex flex-col items-center max-sm:hidden md:w-[300px] pt-20 bg-bg-1">
      <div className="flex flex-col  gap-6 w-full">
        {sideBarLinks.map((link, idx) => {
          const isActive =
            path === link.route || path.startsWith(`${link.route}/`);
          return (
            <Link
              href={link.route}
              key={idx}
              className={cn("flex gap-4 p-4 rounded-lg items-center", {
                "bg-blue-400": isActive,
              })}
            >
              <Image src={link.image} width={24} height={24} alt={link.label} />
              <p className="text-lg font-semibold">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
