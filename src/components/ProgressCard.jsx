import { motion } from "framer-motion";

function ProgressCard({ icon: Icon, title, value, subtext, progressPercent, accentColor = "from-purple-500 to-indigo-500", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-900 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr ${accentColor} p-0.5 shadow-md`}>
          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          STAT
        </span>
      </div>

      <div className="mt-3">
        <div className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
          {value}
        </div>
        <div className="text-xs font-semibold text-slate-300 mt-0.5">
          {title}
        </div>
        {subtext && (
          <div className="text-[11px] text-slate-400 mt-0.5">
            {subtext}
          </div>
        )}
      </div>

      {progressPercent !== undefined && (
        <div className="mt-3.5 pt-3 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold mb-1">
            <span>Completion Meter</span>
            <span className="text-purple-400 font-bold">{progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${accentColor} transition-all duration-500`}
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ProgressCard;
