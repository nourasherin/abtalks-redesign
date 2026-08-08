import { motion } from 'framer-motion';

function MotivationalQuoteCard({ quote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-4"
    >
      <h3 className="mb-2 text-sm font-semibold text-slate-300 uppercase tracking-wider">
        Motivational Quote
      </h3>
      <p className="text-xs italic text-slate-200">“{quote.quote}”</p>
      <p className="mt-1 text-right text-xs text-slate-400">— {quote.author}</p>
    </motion.div>
  );
}

export default MotivationalQuoteCard;
