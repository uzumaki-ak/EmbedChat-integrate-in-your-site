import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Integration from "@/components/landing/integration";
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
      <Integration />
    </main>
  );
}

export default page;
