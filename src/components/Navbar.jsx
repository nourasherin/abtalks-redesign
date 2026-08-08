import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles, Trophy, Users, HelpCircle, ArrowRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Challenges", href: "#challenges", icon: Code2 },
    { name: "How It Works", href: "#how-it-works", icon: Sparkles },
    { name: "Success Stories", href: "#stories", icon: Users },
    { name: "Leaderboard", href: "#leaderboard", icon: Trophy },
  ];

  return (
    <header role="navigation" className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-0.5 shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
              <Code2 className="h-5 w-5 text-purple-400 transition-colors group-hover:text-purple-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white">
              AB<span className="gradient-text">Talks</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-purple-400/90 uppercase -mt-1">
              AI Challenge
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/40 active:scale-[0.98]"
          >
            <span>Start Challenge</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-white md:hidden focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-label="Toggle Navigation Menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-1 px-4 pt-2 pb-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <Icon className="h-5 w-5 text-purple-400" />
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <div className="pt-4">
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-5 py-3 text-base font-bold text-white shadow-lg shadow-purple-500/30 transition-transform active:scale-[0.98]"
                >
                  <span>Start 60-Day Challenge</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;