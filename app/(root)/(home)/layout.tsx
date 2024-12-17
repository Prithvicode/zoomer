import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex ">
        <Sidebar />

        <section className="flex min-h-screen flex-col w-full px-5 pb-6  pt-20 lg:ml-[300px] sm:ml-[150px]  ">
          {children}
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
