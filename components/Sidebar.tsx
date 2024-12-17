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
    <section className="fixed z-40 left-0 top-0 h-screen p-6 sm:px-5  flex flex-col items-center max-sm:hidden lg:w-[300px] min-w-[150px] pt-20 bg-bg-1 ">
      <div className="flex flex-col  gap-6 w-full">
        {sideBarLinks.map((link, idx) => {
          const isActive =
            path === link.route || path.startsWith(`${link.route}/`);
          return (
            <Link
              prefetch={true}
              href={link.route}
              key={idx}
              className={cn(
                "flex gap-4 px-4 py-2 mt-3 shadow-md rounded-lg items-center  max-lg:justify-center max-md:px-2",
                {
                  "bg-bg-3": isActive,
                }
              )}
            >
              <Image
                loading="eager"
                src={link.image}
                width={40}
                height={40}
                alt={link.label}
                placeholder="empty"
                className=" "
              />
              <p className="text-lg font-bold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
