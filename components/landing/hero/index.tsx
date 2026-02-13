import React from "react";
import ChatInterface from "./ChatInterface";

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2  px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop:blur-md mb-8 animate-float">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
        <span className="text-xs font-medium text-zinc-400">New updates On the way</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400">
            Human-friendly AI
          </span>
        </h1>
        <p className="text-lg md:textxl text-gray-600 max-w-2xl mx-auto mb-10">
          Instantly resolve customer questions with an assistant that reads your docs and speaks with empathy.
        </p>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mb-20">
            <button suppressHydrationWarning className="h-11 px-6 py-3 rounded-br-full rounded-tl-full cursor-pointer bg-white text-black font-medium hover:bg-zinc-200 transition-colors">Get Started</button>
            <button suppressHydrationWarning className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 cursor-pointer text-white font-medium hover:bg-white/10 transition-colors">View Demo</button>
        </div>
      </div>

      {/* floating chat interface image  */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="rounded-2xl p-1 relative md:p-2 overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col h-[500px] md:h-[600px] w-full bg-[#0a0a0e] rounded-xl overflow-hidden">
            <ChatInterface />
            </div>
            </div>
      </div>
    </section>
  );
}

export default Hero;