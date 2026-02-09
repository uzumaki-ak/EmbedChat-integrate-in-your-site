import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/nav";
import React from "react";

function page() {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar />
      <Hero />
    </main>
  );
}

export default page;
