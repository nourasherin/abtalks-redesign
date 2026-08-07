import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Lightbulb, ChevronDown, ChevronUp, Sparkles, BookOpen, CheckCircle2, Zap } from "lucide-react";

function AICoachCard({ coachData, todaysChallenge }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-slate-900/90 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-blue-950/20 pointer-events-none" />

      <div className="relative z-10 space-y-4">
        
        {/* Header Row */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 p-0.5 shadow-md">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
                <Bot className="h-5 w-5 text-purple-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-white text-sm">ABTalks AI Coach</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[11px] text-slate-400">Daily Mentor & Code Companion</span>
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 rounded-xl border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-bold text-purple-300 transition-colors hover:bg-purple-500/20"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Explain Today's Challenge</span>
            {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          </button>
        </div>

        {/* Daily Motivation Quote */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
            Daily Motivation
          </span>
          <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed bg-slate-950/60 rounded-xl p-3 border border-slate-800/60">
            {coachData.dailyMotivation}
          </p>
        </div>

        {/* Personalized Study Tip */}
        <div className="flex items-start gap-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 p-3 text-xs text-purple-200">
          <Lightbulb className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <span>{coachData.personalizedStudyTip}</span>
        </div>

        {/* Expandable AI Explanation Modal/Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-purple-500/30 pt-4 mt-4 space-y-3 font-sans"
            >
              <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>AI Breakdown: Day {todaysChallenge.dayNumber} - {todaysChallenge.title}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {todaysChallenge.explanation.overview}
                </p>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Concepts to Learn:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {todaysChallenge.explanation.keyConcepts.map((concept, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl bg-purple-950/40 border border-purple-500/30 p-3 text-xs text-purple-200">
                  <span className="font-bold text-purple-300">💡 Starter Hint: </span>
                  {todaysChallenge.explanation.starterHint}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default AICoachCard;
