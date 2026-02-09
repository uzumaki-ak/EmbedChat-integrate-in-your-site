import React from "react";

const Social = () => {
  return (
    <section className="py-12 border-y border-white/5  bg-black/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs  text-zinc-200 uppercase tracking-widest mb-8 font-extrabold ">
          Trusted by Thousands of Happy Customers  ^_____^
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale-25">
          <span className="text-lg font-bold tracking-tight text-white">
            ACME
          </span>
          <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
            <div className="w-4 h-4 bg-white rounded-full"> </div> Sphere
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            NEXSUs
          </span>
          <span className="text-lg font-bold tracking-tight text-white italic font-mono">
            Vintage
          </span>
          <span className="text-lg font-bold tracking-tight text-white font-serif">
            ASIAN
          </span>
        </div>
      </div>
    </section>
  );
};

export default Social;
