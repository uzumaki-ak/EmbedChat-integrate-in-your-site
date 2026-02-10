import React from "react";

const Integration = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 border-t border-white/5 bg-black/20"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Drop in Simplicity
          </h2>

          <p className="text-gray-400 font-light text-lg mb-10 leading-relaxed">
            no complex sdk or api integration required. just drop our script
            into your website and watch your customer engagement soar.
          </p>

          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">
                1
              </div>
              <span className="text-sm text-zinc-300 font-medium">
                Scan your documentation URL
              </span>
            </div>

            <div className="w-px h-6 bg-zinc-800 ml-3" />

            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">
                2
              </div>
              <span className="text-sm text-zinc-300 font-medium">
                Copy the embed code
              </span>
            </div>

            <div className="w-px h-6 bg-zinc-800 ml-3" />

            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">
                3
              </div>
              <span className="text-sm text-zinc-300 font-medium">
                Auto resolve tickets
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-lg">
          <div className="glass-card rounded-xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
              </div>
              <span className="text-xs text-zinc-500">index.html</span>
            </div>
            <div className="font-mono text-xs md:text-sm leading-7 text-zinc-400">
              <div className="text-zinc-600">&lt;!DOCTYPE html&gt;</div>
              <div>
                &lt;<span>script</span>
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">src</span>
                <span className="text-emerald-500">
                  &quot;https://cdn.example.com/widget.js&quot;
                </span>
              </div>
              <div className="pl-4">
                <span className="text-indigo-400">data-id</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
