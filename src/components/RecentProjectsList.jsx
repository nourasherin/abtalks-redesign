import { motion } from "framer-motion";
import { CheckCircle2, Star, FolderOpen, ExternalLink, Code2 } from "lucide-react";

function RecentProjectsList({ projects = [] }) {
  const isEmpty = projects.length === 0;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <FolderOpen className="h-4 w-4 text-purple-400" />
          <h3 className="font-bold text-white text-base">Recent Portfolio Projects</h3>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          {isEmpty ? "0 Projects" : `${projects.length} Verified`}
        </span>
      </div>

      {isEmpty ? (
        /* Empty State Fallback */
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-3 rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Code2 className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-white text-sm">No Recent Projects Yet</h4>
            <p className="text-xs text-slate-400 max-w-xs">
              Complete your first challenge to automatically generate verified GitHub repositories and live preview links!
            </p>
          </div>
        </div>
      ) : (
        /* Completed Projects List */
        <div className="space-y-3">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.day}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-slate-800/90 bg-slate-950/70 p-4 transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-950"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-purple-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-purple-300 border border-purple-500/30">
                    DAY {proj.day}
                  </span>
                  <h4 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h4>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {proj.testStatus}
                  </span>
                  <span>Completed {proj.completedDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
                <span className="rounded-lg bg-slate-900 px-2.5 py-1 font-mono text-xs font-bold text-amber-300 border border-amber-500/20">
                  ★ Score {proj.score}
                </span>

                <a
                  href={`https://github.com/${proj.githubRepo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentProjectsList;
