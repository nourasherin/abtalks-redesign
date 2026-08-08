import { motion } from 'framer-motion';

function CalendarCard({ events }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-4"
    >
      <h3 className="mb-2 text-sm font-semibold text-slate-300 uppercase tracking-wider">
        Calendar
      </h3>
      <ul className="space-y-1 text-xs text-slate-200">
        {events.map((e) => (
          <li key={e.date} className="flex justify-between border-b border-slate-800/40 pb-0.5">
            <span>{e.date}</span>
            <span className="text-slate-400">{e.event}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default CalendarCard;
