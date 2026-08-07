import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

function WelcomeBanner({ profile, todaysChallenge }) {
  const isFirstDay = profile.completedProjectsCount === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 p-5 sm:p-7 backdrop-blur-xl shadow-xl"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        
        {/* Left: Greeting & Status */}
        <div className="space-y-2 max-w-xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-300">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>{profile.levelTitle}</span>
            </span>

            {!isFirstDay && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300">
                <Flame className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                <span>{profile.currentStreak}-Day Active Streak</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Welcome back, <span className="gradient-text">{profile.name}</span>! 👋
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {isFirstDay
              ? "Welcome to Day 1 of your 60-day challenge! Today you will write your first production project code."
              : `You're on Day ${todaysChallenge.dayNumber} of 60. You've completed ${profile.completedProjectsCount} projects with a 100% test pass rate!`}
          </p>
        </div>

        {/* Right: Quick Action CTA */}
        <div className="flex shrink-0">
          <Link
            to={`/day/${todaysChallenge.dayNumber}`}
            className="group flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>
              {isFirstDay ? "Start Day 1 Challenge" : `Continue Day ${todaysChallenge.dayNumber}`}
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default WelcomeBanner;
