import { Link } from "react-router-dom";
import { Code2, Flame, Zap, ArrowLeft, Home, Trophy, User } from "lucide-react";

function DashboardNavbar({ profile }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Left: Brand & Return Home */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group" title="Return to Landing Page">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 p-0.5 shadow-md">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                <Code2 className="h-4 w-4 text-purple-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-white">
                AB<span className="gradient-text">Talks</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest -mt-1">
                Dashboard
              </span>
            </div>
          </Link>

          <div className="hidden sm:block h-5 w-[1px] bg-slate-800" />

          <Link
            to="/"
            className="hidden sm:flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </div>

        {/* Right: User Stats & Demo Profile Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* XP Pill */}
          <div className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-xs font-bold text-purple-300">
            <Zap className="h-3.5 w-3.5 text-purple-400 fill-purple-400" />
            <span>{profile.totalXp.toLocaleString()} XP</span>
          </div>

          {/* Streak Flame Pill */}
          <div className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-300">
            <Flame className="h-3.5 w-3.5 text-orange-400 fill-orange-400 animate-pulse" />
            <span>{profile.currentStreak} Days</span>
          </div>

          {/* Demo Student Avatar Badge */}
          <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-semibold text-slate-200">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-6 w-6 rounded-full object-cover border border-purple-500/40"
            />
            <span className="hidden xs:inline text-xs font-bold text-white">
              {profile.name}
            </span>
            <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[10px] font-bold text-purple-300">
              Lvl {profile.level}
            </span>
          </div>

        </div>

      </div>
    </header>
  );
}

export default DashboardNavbar;
