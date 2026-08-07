import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ShieldAlert, RotateCcw, Flame, CheckCircle2, ArrowRight, Zap, Clock, HeartHandshake } from "lucide-react";

function AIMotivationCard() {
  const [selectedScenario, setSelectedScenario] = useState("missed_yesterday");

  const motivationScenarios = {
    missed_yesterday: {
      id: "missed_yesterday",
      tab: "Missed Yesterday",
      badge: "Streak Protection Active",
      badgeClass: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      icon: ShieldAlert,
      headline: "Missed a day? Momentum matters more than perfection.",
      aiQuote:
        "“Don't beat yourself up! Missing one day is normal. The secret to becoming a great engineer is getting back on track without restarting from scratch. Your streak shield is activated.”",
      achievableTask: {
        title: "15-Minute Micro-Task to Protect Your Streak:",
        description: "Write 3 unit tests or review 1 pull request from yesterday's project brief.",
        estimatedTime: "12 mins",
        difficulty: "Easy",
      },
      ctaText: "Complete 15-Min Quick Recovery",
      gradient: "from-amber-500/15 via-purple-500/10 to-transparent",
      borderColor: "border-amber-500/40",
    },
    busy_schedule: {
      id: "busy_schedule",
      tab: "Short on Time Today",
      badge: "Micro-Learning Mode",
      badgeClass: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      icon: Clock,
      headline: "Only have 10 minutes? That's plenty to keep growing.",
      aiQuote:
        "“Consistency isn't spending 4 hours every single day. On super busy days, a 10-minute code refactor or reading a system design breakdown keeps your brain sharp and your habit loop alive.”",
      achievableTask: {
        title: "Achievable 10-Minute Task for Today:",
        description: "Read today's 3-minute architecture breakdown & fix 1 console warning.",
        estimatedTime: "8 mins",
        difficulty: "Micro",
      },
      ctaText: "Do 10-Min Micro Action",
      gradient: "from-cyan-500/15 via-indigo-500/10 to-transparent",
      borderColor: "border-cyan-500/40",
    },
    low_streak: {
      id: "low_streak",
      tab: "Low Streak (2 Days)",
      badge: "Habit Building Phase",
      badgeClass: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
      icon: RotateCcw,
      headline: "Small steps compound into massive software skills.",
      aiQuote:
        "“You're on Day 2! The first 5 days require the most push. Focus only on completing today's single task. Once you hit a 7-day streak, coding becomes an effortless daily routine.”",
      achievableTask: {
        title: "Today's Single Small Goal:",
        description: "Clone starter code & implement the user login validation function.",
        estimatedTime: "20 mins",
        difficulty: "Achievable",
      },
      ctaText: "Complete Day 3 Goal",
      gradient: "from-indigo-500/15 via-purple-500/10 to-transparent",
      borderColor: "border-indigo-500/40",
    },
    high_streak: {
      id: "high_streak",
      tab: "On Fire (14 Days)",
      badge: "Top 10% Builder",
      badgeClass: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      icon: Flame,
      headline: "14 Days Straight! You are building serious momentum.",
      aiQuote:
        "“Fourteen projects in fourteen days! You've already built a richer GitHub portfolio than 90% of job applicants. Keep this momentum rolling — today's challenge unlocks AI Agent integration.”",
      achievableTask: {
        title: "Milestone Challenge:",
        description: "Build & deploy today's AI Chatbot backend & share your streak badge.",
        estimatedTime: "30 mins",
        difficulty: "Level Up",
      },
      ctaText: "Claim Day 14 Badge",
      gradient: "from-rose-500/15 via-purple-500/10 to-transparent",
      borderColor: "border-rose-500/40",
    },
  };

  const current = motivationScenarios[selectedScenario];
  const Icon = current.icon;

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <HeartHandshake className="h-3.5 w-3.5 text-purple-400" />
            <span>AI Motivation & Streak Recovery</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Never Feel Discouraged or Left Behind
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Life happens. If you miss a day or have a low streak, our AI Assistant automatically breaks down your challenge into achievable, bite-sized tasks so you never lose momentum.
          </p>
        </div>

        {/* Scenario Selector Pills */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 backdrop-blur-xl">
            {Object.keys(motivationScenarios).map((key) => {
              const item = motivationScenarios[key];
              const isActive = selectedScenario === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <span>{item.tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI Motivation Card */}
        <div className="mt-8 mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`relative overflow-hidden rounded-3xl border ${current.borderColor} bg-slate-900/95 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl`}
            >
              {/* Inner Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                
                {/* Header Row */}
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
                      <span className="text-xs text-slate-400">Adaptive Streak Recovery System</span>
                    </div>
                  </div>

                  <div className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-bold ${current.badgeClass}`}>
                    <Icon className="h-3.5 w-3.5" />
                    <span>{current.badge}</span>
                  </div>
                </div>

                {/* Main Headline & AI Quote */}
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    {current.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed bg-slate-950/70 rounded-2xl p-4.5 border border-slate-800/60 shadow-inner">
                    {current.aiQuote}
                  </p>
                </div>

                {/* Achievable Micro Next Step Box */}
                <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 to-slate-950 p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-purple-300">
                      <Zap className="h-4 w-4 text-purple-400" />
                      <span>{current.achievableTask.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[11px] font-bold text-purple-300">
                        Est: {current.achievableTask.estimatedTime}
                      </span>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
                        {current.achievableTask.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm font-medium text-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{current.achievableTask.description}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400 text-center sm:text-left">
                    💡 Small daily wins build long-term tech careers. No penalties, just progress.
                  </div>
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95">
                    <span>{current.ctaText}</span>
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
