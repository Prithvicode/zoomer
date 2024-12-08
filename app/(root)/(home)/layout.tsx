import Navbar from "@/components/Navbar";

import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <section>{children}</section>
      </div>
    </main>
  );
};

export default HomeLayout;
