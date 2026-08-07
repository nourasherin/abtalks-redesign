import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Zap, ArrowRight, CheckCircle2, Flame, RotateCcw } from "lucide-react";

function StreakRecoveryCard({ recoveryData }) {
  const [isSimulatedMissed, setIsSimulatedMissed] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-slate-900/90 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-amber-500/10 blur-2xl" />

      <div className="relative z-10 space-y-4">
        
        {/* Top Header & Simulation Toggle */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-400" />
            <span className="font-bold text-white text-sm">Streak Protection & Recovery</span>
          </div>

          {/* Toggle for demo simulation */}
          <button
            onClick={() => {
              setIsSimulatedMissed(!isSimulatedMissed);
              setIsCompleted(false);
            }}
            className="rounded-lg bg-slate-800/90 px-2.5 py-1 text-[10px] font-bold text-amber-300 hover:bg-slate-800 border border-amber-500/30"
          >
            {isSimulatedMissed ? "Simulate: Active Streak" : "Simulate: Missed Day"}
          </button>
        </div>

        {/* State 1: Missed Day Recovery Challenge */}
        {isSimulatedMissed ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
              <Flame className="h-4 w-4 text-orange-400 fill-orange-400" />
              <span>Missed Day 11? Restore Your 12-Day Streak!</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Don't worry — life happens! Complete this bite-sized bonus task to consume your <strong>Streak Shield</strong> and keep your daily streak intact.
            </p>

            <div className="rounded-2xl border border-amber-500/30 bg-slate-950 p-4 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">{recoveryData.bonusChallenge.title}</span>
                <span className="flex items-center gap-1 rounded bg-amber-500/20 px-2 py-0.5 text-[11px] font-bold text-amber-300">
                  <Zap className="h-3 w-3 fill-amber-300" /> +{recoveryData.bonusChallenge.rewardXp} XP
                </span>
              </div>

              <p className="text-xs text-slate-300">
                {recoveryData.bonusChallenge.description}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">Est. Time: {recoveryData.bonusChallenge.estimatedTime}</span>
                
                {isCompleted ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/40">
                    <CheckCircle2 className="h-4 w-4" /> Streak Restored!
                  </span>
                ) : (
                  <button
                    onClick={() => setIsCompleted(true)}
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-xs font-bold text-slate-950 hover:scale-105 active:scale-95 transition-all shadow-md shadow-amber-500/20"
                  >
                    <span>Complete Recovery Bonus</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* State 2: Active Streak Shield Status */
          <div className="flex items-center justify-between rounded-2xl bg-slate-950 p-4 border border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white">1 Streak Shield Ready</span>
              </div>
              <p className="text-[11px] text-slate-400">
                If you miss a day, your shield automatically grants a 15-minute micro task to save your streak.
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 shrink-0">
              <Flame className="h-5 w-5 fill-amber-300" />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default StreakRecoveryCard;
