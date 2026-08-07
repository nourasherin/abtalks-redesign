import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Heart, Globe, MessageSquare, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Callout Banner inside Footer */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-950/40 p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 uppercase tracking-wider">
                <Mail className="h-3.5 w-3.5" /> Newsletter & Daily Briefs
              </span>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Get Weekly Full-Stack Micro-Project Teardowns
              </h3>
              <p className="text-sm text-slate-300">
                Join 12,000+ developers receiving curated AI coding tips, architecture templates, and career advice.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 p-3.5 text-sm font-semibold text-emerald-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>You're subscribed! Check your inbox for daily briefs.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/30 transition-transform active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand Info Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-0.5 shadow-md">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                  <Code2 className="h-4 w-4 text-purple-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                AB<span className="gradient-text">Talks</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
              Empowering engineers to master full-stack development through daily 60-day project challenges and AI guidance.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs text-slate-300 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Systems Operational</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-slate-700 hover:text-white transition-colors" aria-label="GitHub">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-slate-700 hover:text-white transition-colors" aria-label="X / Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-slate-700 hover:text-white transition-colors" aria-label="Discord">
                <Globe className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-slate-700 hover:text-white transition-colors" aria-label="Community">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Curriculum</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#challenges" className="text-slate-400 hover:text-white transition-colors">60-Day Roadmap</a></li>
              <li><a href="#stories" className="text-slate-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#leaderboard" className="text-slate-400 hover:text-white transition-colors">Leaderboard</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Resources</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">AI Code Reviews</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub Templates</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Discord Community</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Legal / Project Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/day/12" className="text-slate-400 hover:text-white transition-colors">Day 12 Challenge</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 ABTalks Redesign. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>for Full-Stack Developers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
