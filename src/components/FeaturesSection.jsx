import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bot, Code2, GitBranch, Trophy, Zap, ShieldCheck, Terminal, Cpu } from "lucide-react";
import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Features" },
    { id: "ai", label: "AI Mentorship" },
    { id: "portfolio", label: "Portfolio & GitHub" },
    { id: "community", label: "Community & Streaks" },
  ];

  const allFeatures = [
    {
      category: "ai",
      icon: Bot,
      title: "AI-Powered Code Reviews",
      description:
        "Instant, line-by-line automated code feedback on every pull request. Learn best practices, fix memory leaks, and optimize algorithms in real time.",
      tag: "Sub-second Feedback",
      stepNumber: "01",
    },
    {
      category: "portfolio",
      icon: Code2,
      title: "60 Real-World Micro Projects",
      description:
        "No trivial tutorial hell. Build production-ready full-stack web apps, REST APIs, database tools, and AI agents that prove real skills.",
      tag: "Hands-on Projects",
      stepNumber: "02",
    },
    {
      category: "portfolio",
      icon: GitBranch,
      title: "Automated Portfolio Showcase",
      description:
        "Every completed challenge automatically commits to your GitHub with documentation, live previews, and verifiable code metrics for recruiters.",
      tag: "GitHub Ready",
      stepNumber: "03",
    },
    {
      category: "community",
      icon: Trophy,
      title: "Leaderboard & Peer Accountability",
      description:
        "Climb the global community leaderboard, share daily milestone badges, and stay motivated alongside 8,800+ fellow developers.",
      tag: "Community Driven",
      stepNumber: "04",
    },
    {
      category: "ai",
      icon: Cpu,
      title: "Adaptive Hint & Debug System",
      description:
        "Stuck on an algorithm or API bug? Get progressive hints tailored to your codebase without revealing full code spoilers.",
      tag: "Smart Hints",
      stepNumber: "05",
    },
    {
      category: "community",
      icon: ShieldCheck,
      title: "Streak Protection Shields",
      description:
        "Life gets busy. Activate 15-minute streak protection micro-tasks when you miss a day so your momentum stays alive.",
      tag: "Zero Burnout",
      stepNumber: "06",
    },
  ];

  const filteredFeatures = activeCategory === "all"
    ? allFeatures
    : allFeatures.filter(f => f.category === activeCategory);

  return (
    <section id="challenges" className="relative py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            <span>Built for Modern Engineers</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to Become a <span className="gradient-text">Job-Ready Developer</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            A structured daily habit loop designed to take you from foundational coding concepts to deploying production full-stack apps.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/90 p-1.5 backdrop-blur-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tag={feature.tag}
                stepNumber={feature.stepNumber}
                delay={idx * 0.08}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;
