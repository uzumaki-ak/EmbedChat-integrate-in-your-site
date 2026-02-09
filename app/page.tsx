import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/nav";
import Social from "@/components/landing/social";
import React from "react";

function page() {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar />
      <Hero />
      <Social />
      <Features />
    </main>
  );
}

export default page;
