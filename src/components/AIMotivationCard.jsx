import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Flame, ShieldAlert, ArrowRight, CheckCircle2, RotateCcw, Zap } from "lucide-react";

function AIMotivationCard() {
  const [activeTab, setActiveTab] = useState("missed");

  const scenarios = {
    missed: {
      id: "missed",
      tabLabel: "Missed Yesterday",
      badge: "Streak Recovery Active",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      icon: ShieldAlert,
      title: "Missed a day? No worries — Momentum > Perfection!",
      quote:
        "“Life happens! One missed day doesn't ruin your 60-day journey. Don't restart from zero — take this 15-minute recovery micro-task to save your streak shield and stay in the game.”",
      nextStepTitle: "Recommended Small Next Step:",
      nextStep: "Complete 1 micro code review or write a single unit test (Est: 10-15 mins)",
      actionText: "Save My Streak (15-Min Task)",
      accentGradient: "from-amber-500/20 via-purple-500/10 to-transparent",
      borderColor: "border-amber-500/30",
    },
    lowStreak: {
      id: "lowStreak",
      tabLabel: "Low Streak (2 Days)",
      badge: "Building Momentum",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      icon: RotateCcw,
      title: "Small steps compound into massive engineering skills.",
      quote:
        "“You're on Day 2! The hardest part is getting over the starting line. Focus only on today's single pull request. Once you hit 5 days, daily coding becomes second nature.”",
      nextStepTitle: "Recommended Small Next Step:",
      nextStep: "Clone today's starter template & complete Step 1: Define API interfaces (Est: 20 mins)",
      actionText: "Complete Day 3 Goal",
      accentGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-blue-500/30",
    },
    onFire: {
      id: "onFire",
      tabLabel: "On Fire (14 Days)",
      badge: "Streak Milestone",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      icon: Flame,
      title: "You're in the top 10% of consistent builders!",
      quote:
        "“14 days without missing a beat! You've already built 14 standalone micro-apps on GitHub. Keep this fire burning — today's challenge unlocks advanced AI agent integration.”",
      nextStepTitle: "Recommended Small Next Step:",
      nextStep: "Share your Day 14 milestone badge on LinkedIn & start Day 15 project",
      actionText: "Claim Day 14 Badge",
      accentGradient: "from-rose-500/20 via-purple-500/10 to-transparent",
      borderColor: "border-rose-500/30",
    },
  };

  const current = scenarios[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <Bot className="h-3.5 w-3.5 text-purple-400" />
            <span>AI Adaptive Motivation System</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Never Feel Discouraged or Left Behind
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Our AI mentor adjusts to your life schedule. If you miss a day or hit a roadblock, it breaks down the workload into small, manageable micro-steps so you never give up.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 backdrop-blur-xl">
            {Object.keys(scenarios).map((key) => {
              const item = scenarios[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic AI Motivation Card */}
        <div className="mt-8 mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-3xl border ${current.borderColor} bg-slate-900/90 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl`}
            >
              {/* Top ambient glow inside card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${current.accentGradient} pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 p-0.5 shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
                        <Bot className="h-6 w-6 text-purple-300" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-base">ABTalks AI Coach</span>
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <span className="text-xs text-slate-400">Personalized Encouragement Engine</span>
                    </div>
                  </div>

                  <div className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${current.badgeColor}`}>
                    <IconComponent className="h-3.5 w-3.5" />
                    <span>{current.badge}</span>
                  </div>
                </div>

                {/* Main Quote & Message */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {current.title}
                  </h3>
                  <p className="text-base text-slate-300 italic leading-relaxed bg-slate-950/60 rounded-2xl p-4 border border-slate-800/60">
                    {current.quote}
                  </p>
                </div>

                {/* Recommended Micro Next Step Box */}
                <div className="rounded-2xl border border-purple-500/30 bg-purple-950/30 p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-purple-300">
                    <Zap className="h-4 w-4 text-purple-400" />
                    <span>{current.nextStepTitle}</span>
                  </div>
                  <div className="mt-2 flex items-start gap-3 text-sm font-semibold text-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{current.nextStep}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400 text-center sm:text-left">
                    ⚡ Micro-actions take less than 15 mins to keep your streak active.
                  </div>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95">
                    <span>{current.actionText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default AIMotivationCard;
