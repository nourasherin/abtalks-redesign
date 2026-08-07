import { motion } from "framer-motion";
import { Calendar, Users, GitBranch, Flame } from "lucide-react";

function StatsSection() {
  const stats = [
    {
      id: "duration",
      value: "60 Days",
      label: "Guided Challenge",
      sublabel: "Curated step-by-step curriculum",
      icon: Calendar,
      accent: "from-purple-500 to-indigo-500",
      glow: "group-hover:border-purple-500/50",
    },
    {
      id: "students",
      value: "8,800+",
      label: "Active Students",
      sublabel: "Learning & coding together",
      icon: Users,
      accent: "from-blue-500 to-cyan-500",
      glow: "group-hover:border-blue-500/50",
    },
    {
      id: "projects",
      value: "1,000+",
      label: "GitHub Projects",
      sublabel: "Open-source & portfolio ready",
      icon: GitBranch,
      accent: "from-indigo-500 to-purple-500",
      glow: "group-hover:border-indigo-500/50",
    },
    {
      id: "streaks",
      value: "Daily",
      label: "Learning Streaks",
      sublabel: "Consistency-driven growth",
      icon: Flame,
      accent: "from-amber-500 to-orange-500",
      glow: "group-hover:border-amber-500/50",
    },
  ];

  return (
    <section className="relative py-12 border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 ${stat.glow} hover:bg-slate-900/90 hover:scale-[1.02]`}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${stat.accent} p-0.5 shadow-md`}>
                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    METRIC #0{index + 1}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-200">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-400">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
