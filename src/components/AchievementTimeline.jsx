import { motion } from 'framer-motion';

function AchievementTimeline({ achievements }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-4"
    >
      <h3 className="mb-2 text-sm font-semibold text-slate-300 uppercase tracking-wider">
        Achievements
      </h3>
      <ul className="space-y-2 text-xs text-slate-200">
        {achievements.map((a) => (
          <li key={a.date} className="border-b border-slate-800/40 pb-1">
            <span className="block font-medium text-slate-100">{a.title}</span>
            <span className="block text-slate-400">{a.date}</span>
            <span className="block">{a.description}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default AchievementTimeline;
