import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Clock, Zap, ArrowRight, Play, CheckCircle2, Terminal, Cpu } from "lucide-react";

function TodaysChallengeCard({ challenge }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl border border-purple-500/40 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/50 p-6 sm:p-7 backdrop-blur-xl shadow-2xl purple-blue-glow"
    >
      {/* Background radial light */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl transition-transform group-hover:scale-125" />

      <div className="relative z-10 space-y-5">
        
        {/* Top Header Pill Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-purple-300 uppercase tracking-widest">
              TODAY'S CHALLENGE • DAY {challenge.dayNumber} OF 60
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-bold text-purple-300 border border-purple-500/30">
              <Clock className="h-3.5 w-3.5" />
              <span>{challenge.estimatedTime}</span>
            </span>
            <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-bold text-blue-300 border border-blue-500/30">
              {challenge.difficulty}
            </span>
          </div>
        </div>

        {/* Challenge Title & Description */}
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl tracking-tight">
            {challenge.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {challenge.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Required Tech Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {challenge.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Row: Test Suite Status & Action CTA */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-1.5">
              <Terminal className="h-4 w-4 text-indigo-400" />
              <span>Test Suite:</span>
            </div>
            <span className="font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
              {challenge.passedTests}/{challenge.testCasesCount} Passed
            </span>
          </div>

          <Link
            to={`/day/${challenge.dayNumber}`}
            className="group/btn flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Play className="h-4 w-4 fill-white" />
            <span>Start Day {challenge.dayNumber} Challenge</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default TodaysChallengeCard;
