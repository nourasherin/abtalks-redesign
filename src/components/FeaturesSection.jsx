import { Sparkles, Bot, Code2, GitBranch, Trophy, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Code Reviews",
      description:
        "Instant, line-by-line automated code feedback on every pull request. Learn best practices, fix memory leaks, and optimize algorithms in real time.",
      tag: "Sub-second Feedback",
      stepNumber: "01",
    },
    {
      icon: Code2,
      title: "60 Real-World Micro Projects",
      description:
        "No trivial tutorial hell. Build production-ready full-stack web apps, REST APIs, database tools, and AI agents that prove real skills.",
      tag: "Hands-on Projects",
      stepNumber: "02",
    },
    {
      icon: GitBranch,
      title: "Automated Portfolio Showcase",
      description:
        "Every completed challenge automatically commits to your GitHub with documentation, live previews, and verifiable code metrics for recruiters.",
      tag: "GitHub Ready",
      stepNumber: "03",
    },
    {
      icon: Trophy,
      title: "Leaderboard & Peer Accountability",
      description:
        "Climb the global community leaderboard, share daily milestone badges, and stay motivated alongside 8,800+ fellow developers.",
      tag: "Community Driven",
      stepNumber: "04",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            <span>Why ABTalks Works</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to Become a <span className="gradient-text">Job-Ready Developer</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            A structured daily habit loop designed to take you from foundational coding concepts to deploying production full-stack apps.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              tag={feature.tag}
              stepNumber={feature.stepNumber}
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;
