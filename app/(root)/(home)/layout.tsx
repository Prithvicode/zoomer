import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-col  px-6 pb-6  pt-24">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
