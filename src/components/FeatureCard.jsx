import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, description, tag, stepNumber, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/50 hover:bg-slate-900/95 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
    >
      {/* Background Gradient Glow on Hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/10 blur-2xl transition-all duration-500 group-hover:bg-purple-600/20 group-hover:scale-150" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Header Row: Icon & Step Number */}
          <div className="flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 p-0.5 shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-110">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
                <Icon className="h-6 w-6 text-purple-300 transition-colors group-hover:text-purple-200" />
              </div>
            </div>
            {stepNumber && (
              <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-purple-400 transition-colors">
                {stepNumber}
              </span>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
            {title}
          </h3>
          <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tag Pill */}
        {tag && (
          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/90 px-3 py-1 text-xs font-semibold text-purple-300 border border-slate-700/50">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              {tag}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default FeatureCard;
