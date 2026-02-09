import { BookOpen, ShieldEllipsis, StrikethroughIcon } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking">
          Designed for Trusted
        </h2>
        <p className="text-xl text-zinc-500 font-ligt max-w-xl leading-relaxed mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/5 to-transparent hover:border-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-[#0A0A0E] border border-white/10 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-zinc-300" />
          </div>

          <h3 className="text-lg font-medium text-white mb-3 mt-6">
            Knowledge Graph
          </h3>

          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            We crawl your site and docs to build a structured understanding of
            your product. No manual training required.
          </p>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/5 to-transparent">
          <div className="w-12 h-12 rounded-2xl bg-[#0A0A0E] border border-white/10 flex items-center justify-center">
            <ShieldEllipsis className="w-6 h-6 text-zinc-300" />
          </div>

          <h3 className="text-lg font-medium text-white mb-3 mt-6">Security</h3>

          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Define exactly what ai will not say and it will politly decline out
            of scope questions.
          </p>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/5 to-transparent">
          <div className="w-12 h-12 rounded-2xl bg-[#0A0A0E] border border-white/10 flex items-center justify-center">
            <StrikethroughIcon className="w-6 h-6 text-zinc-300" />
          </div>

          <h3 className="text-lg font-medium text-white mb-3 mt-6">
            Tone Matching
          </h3>

          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            whether you&apos;re professional, casual, or anything in between, we
            can match your brand&apos;s tone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
