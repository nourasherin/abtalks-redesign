import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Meh, Frown, Sparkles, ArrowRight, HeartHandshake } from "lucide-react";
import { mockMoodResponses } from "../data/mockDashboardData";

function MoodCheckCard() {
  const [selectedMood, setSelectedMood] = useState("great");

  const moods = [
    { id: "great", emoji: "🙂", label: "Feeling Great", icon: Smile, color: "hover:border-emerald-500/50" },
    { id: "okay", emoji: "😐", label: "Okay", icon: Meh, color: "hover:border-blue-500/50" },
    { id: "help", emoji: "😓", label: "Need Help", icon: Frown, color: "hover:border-purple-500/50" },
  ];

  const currentResponse = mockMoodResponses[selectedMood];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <HeartHandshake className="h-4 w-4 text-purple-400" />
          <span className="font-bold text-white text-sm">Daily Mood & Energy Check</span>
        </div>
        <span className="text-[10px] font-semibold text-slate-400">Interactive AI Support</span>
      </div>

      <p className="text-xs text-slate-300 mb-3.5">
        How are you feeling about your coding challenge today?
      </p>

      {/* Mood Selector Pills */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {moods.map((m) => {
          const isSelected = selectedMood === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelectedMood(m.id)}
              aria-label={`Select mood ${m.label}`}
              aria-pressed={isSelected}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl border p-2.5 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 ${
                isSelected
                  ? "border-purple-500 bg-purple-600/20 text-white shadow-lg shadow-purple-600/20 scale-[1.03]"
                  : "border-slate-800 bg-slate-950/60 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-xl">{m.emoji}</span>
              <span className="text-[11px] font-bold">{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Encouragement Output Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMood}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-slate-800/90 bg-slate-950/80 p-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${currentResponse.badgeColor}`}>
              <Sparkles className="h-3 w-3" />
              <span>{currentResponse.label}</span>
            </span>
            <span className="text-[10px] text-slate-500">AI Tailored Advice</span>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            {currentResponse.message}
          </p>

          <div className="pt-1 flex items-center justify-between text-xs">
            <span className="text-[11px] font-semibold text-purple-300">
              Next Step: {currentResponse.recommendedAction}
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MoodCheckCard;
