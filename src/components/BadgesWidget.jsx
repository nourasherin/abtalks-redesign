import { motion } from "framer-motion";
import { Award, Lock, Sparkles } from "lucide-react";

function BadgesWidget({ badges = [] }) {
  const unlockedBadges = badges.filter((b) => b.unlocked);
  const isEmpty = unlockedBadges.length === 0;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-amber-400" />
          <h3 className="font-bold text-white text-base">Earned Badges & Milestones</h3>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          {unlockedBadges.length}/{badges.length} Unlocked
        </span>
      </div>

      {isEmpty ? (
        /* Empty State Fallback */
        <div className="flex flex-col items-center justify-center py-6 text-center space-y-2 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Lock className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-white text-xs">No Badges Earned Yet</h4>
          <p className="text-[11px] text-slate-400 max-w-xs">
            Complete your first 5 challenge days to unlock your first official ABTalks developer badge!
          </p>
        </div>
      ) : (
        /* Badges Grid */
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`flex flex-col items-center justify-center text-center p-3 rounded-2xl border transition-all duration-300 ${
                b.unlocked
                  ? "border-amber-500/30 bg-slate-950/90 text-white shadow-md"
                  : "border-slate-800/60 bg-slate-950/30 text-slate-600 opacity-60"
              }`}
            >
              <div className="text-2xl mb-1">{b.icon}</div>
              <div className="text-xs font-bold leading-tight mb-0.5">
                {b.title}
              </div>
              <div className="text-[10px] text-slate-400 line-clamp-2">
                {b.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BadgesWidget;
