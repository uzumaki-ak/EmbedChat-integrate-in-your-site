import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Integration from "@/components/landing/integration";
import Navbar from "@/components/landing/nav";
import Pricing from "@/components/landing/pricing";
import Social from "@/components/landing/social";
import React from "react";
import Footer from "@/components/landing/footer";

function page() {
  return (
    <main className="w-full flex flex-col relative z-10">
      <Navbar />
      <Hero />
      <Social />
      <Features />
      <Integration />
      <Pricing />
      <Footer />
    </main>
  );
}

export default page;
