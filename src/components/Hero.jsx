import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Code2, Sparkles, CheckCircle2, Play, Terminal, Cpu } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Radial Purple/Blue Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-600/25 to-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -top-10 right-10 -z-10 h-72 w-72 rounded-full bg-blue-600/15 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold text-purple-300 backdrop-blur-md sm:text-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
              <span>🚀 60-Day AI Coding Challenge</span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl leading-[1.15]">
              Master Full-Stack. <br className="hidden sm:inline" />
              <span className="gradient-text">One Day at a Time.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg lg:text-xl leading-relaxed">
              Complete one real-world software project daily for 60 days. Build an irresistible GitHub portfolio and accelerate your tech career with real-time AI guidance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4">
              <Link
                to="/dashboard"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-purple-500/50 active:scale-[0.98]"
              >
                <span>Start 60-Day Challenge</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#how-it-works"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-6 py-4 text-base font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-purple-500/40 hover:bg-slate-800 hover:text-white"
              >
                <Play className="h-4 w-4 text-purple-400 fill-purple-400" />
                <span>Explore Curriculum</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Zero Setup Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Instant AI Code Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Real GitHub Contributions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow behind preview card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-xl" />
              
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
                {/* Code Window Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">Day_12_AI_Assistant.ts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-md bg-purple-500/20 px-2 py-0.5 text-[11px] font-semibold text-purple-300">
                      <Flame className="h-3 w-3 text-orange-400 fill-orange-400" /> 12 Streak
                    </span>
                  </div>
                </div>

                {/* Mock Code & Interactive Assistant Body */}
                <div className="p-5 space-y-4 font-mono text-xs leading-relaxed">
                  
                  {/* Code snippet */}
                  <div className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-3.5 space-y-1.5 text-slate-300">
                    <div className="flex justify-between text-slate-500 text-[11px] font-sans pb-1 border-b border-slate-800/50">
                      <span>PROJECT 12 / 60</span>
                      <span className="text-emerald-400 font-semibold">Passed 8/8 Tests</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-purple-400">async function</span> <span className="text-blue-400">generateSummary</span>(ctx) {"{"}
                    </div>
                    <div className="pl-4 text-slate-400">
                      <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> ai.<span className="text-blue-300">reviewCode</span>(ctx);
                    </div>
                    <div className="pl-4 text-slate-400">
                      <span className="text-purple-400">return</span> response.<span className="text-blue-300">optimizePerformance</span>();
                    </div>
                    <div>{"}"}</div>
                  </div>

                  {/* AI Mentor Realtime Feedback Box */}
                  <div className="rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-slate-950 p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-purple-300 font-sans font-semibold text-xs">
                        <Cpu className="h-4 w-4 text-purple-400" />
                        <span>ABTalks AI Mentor</span>
                      </div>
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400 font-sans">
                        Score: 98/100
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-300 leading-normal">
                      “Great async implementation! Your error handling is spot on. Time complexity optimized to O(n).”
                    </p>
                  </div>

                  {/* Active Streak Progress Footer */}
                  <div className="flex items-center justify-between rounded-xl bg-slate-950/80 px-3.5 py-2.5 font-sans">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-indigo-400" />
                      <span className="text-xs text-slate-300">Challenge Completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full w-1/5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                      </div>
                      <span className="text-xs font-bold text-purple-400">20%</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;