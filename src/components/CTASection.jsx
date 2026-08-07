import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, CheckCircle2 } from "lucide-react";

function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950/40 p-8 sm:p-12 lg:p-16 text-center shadow-2xl purple-blue-glow"
        >
          {/* Radial Light Ambient Effects */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-600/30 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-600/30 blur-[90px]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-1.5 text-xs font-bold text-purple-300">
              <Flame className="h-4 w-4 text-orange-400 fill-orange-400" />
              <span>Next Cohort Starts Today</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Ready to Build Your Dream <br className="hidden sm:inline" />
              <span className="gradient-text">Software Portfolio?</span>
            </h2>

            <p className="text-base text-slate-300 sm:text-lg lg:text-xl">
              Don't leave your developer growth to chance. Start the 60-day challenge today and let AI accelerate your progress.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-purple-600/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 active:scale-95"
              >
                <span>Start 60-Day Challenge</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Instant Access
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> Cancel Anytime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
