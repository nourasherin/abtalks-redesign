import { motion } from "framer-motion";
import { Calendar, Bot, CheckCircle2, GitBranch, ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Receive Your Daily Project Brief",
      description: "Every morning at 6:00 AM, unlock a real-world software project brief complete with requirements, design specs, and starter template repo.",
      highlight: "From CLI tools to Full-Stack AI Apps",
      color: "from-purple-500 to-indigo-500",
    },
    {
      number: "02",
      icon: Bot,
      title: "Code with Real-time AI Hints",
      description: "Never stay stuck for hours. Ask the ABTalks AI Assistant for architectural hints, edge-case checks, or syntax clarification without getting full code spoilers.",
      highlight: "Guided Learning > Copy-Pasting",
      color: "from-indigo-500 to-blue-500",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Run Automated Tests & Code Review",
      description: "Submit your code to our automated test runner. The AI analyzes your time complexity, clean code practices, security rules, and performance bottlenecks.",
      highlight: "Instant Score & Feedback",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "04",
      icon: GitBranch,
      title: "Publish to GitHub & Build Your Streak",
      description: "Once verified, your project automatically pushes to your public GitHub profile with README badges, live preview links, and contribution grid green dots.",
      highlight: "Verifiable Public Portfolio",
      color: "from-cyan-500 to-emerald-500",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden bg-slate-950/40">
      {/* Radial Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>The 60-Day Methodology</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            How You Build a <span className="gradient-text">World-Class Portfolio</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            A battle-tested 4-step daily rhythm designed to transform theoretical knowledge into real engineering capability.
          </p>
        </div>

        {/* 4 Step Grid Timeline */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background Pill Glow */}
                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-tr ${step.color} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-25 group-hover:scale-125`} />

                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${step.color} p-0.5 shadow-md`}>
                      <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-purple-400 transition-colors">
                      STEP {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-purple-300">
                    {step.highlight}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
