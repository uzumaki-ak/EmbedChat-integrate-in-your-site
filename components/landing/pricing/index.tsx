import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
        Fair, usage-based pricing.
      </h2>
      <p className="text-zinc-500 font-light mb-16">
        Start free, upgrade as you grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
        <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col items-start text-left hover:bg-zinc-900/40 transition-colors">
          <div className="text-sm font-medium text-zinc-400 mb-2">Starter</div>$
          0 <span className="text-lg text-zinc-600 font-light">/month</span>
          <ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light w-full">
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> 100 conversations/mo
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> 1 Knowledge Source
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> Community Support
            </li>
          </ul>
          <button className="w-full py-3 rounded-e-xl cursor-pointer border border-white/5 text-white  font-medium hover:bg-zinc-200/5 text-sm mt-auto transition-colors">
            Get Started
          </button>
        </div>
        <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col items-start text-left hover:bg-zinc-900/40 transition-colors">
          <div className="text-sm font-medium text-zinc-400 mb-2">Popular</div>$
          29 <span className="text-lg text-zinc-600 font-light">/month</span>
          <ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light w-full">
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> 1000 conversations/mo
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> 10 Knowledge Source
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> Community Support
            </li>
          </ul>
          <button className="w-full py-3 cursor-pointer rounded-e-xl border border-white/5 text-white  font-medium hover:bg-zinc-200/5 text-sm mt-auto transition-colors">
            Get Started
          </button>
        </div>
        <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col items-start text-left hover:bg-zinc-900/40 transition-colors">
          <div className="text-sm font-medium text-zinc-400 mb-2">Enterprise</div>$
          299 <span className="text-lg text-zinc-600 font-light">unlimited</span>  
          <ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light w-full">
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> Unlimited Conversation
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> unlimited Knowledge Source
            </li>
            <li className="flex items-center gap-3">
              <Check className="w-4 h-4 text-zinc-600" /> Community Support
            </li>
          </ul>
          <button className="w-full py-3 cursor-pointer rounded-e-xl border border-white/5 text-white  font-medium hover:bg-zinc-200/5 text-sm mt-auto transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
