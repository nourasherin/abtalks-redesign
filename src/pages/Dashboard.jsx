import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Zap, CheckCircle2, GitBranch, ShieldCheck, Sparkles, Filter } from "lucide-react";
import DashboardNavbar from "../components/DashboardNavbar";
import WelcomeBanner from "../components/WelcomeBanner";
import ProgressCard from "../components/ProgressCard";
import TodaysChallengeCard from "../components/TodaysChallengeCard";
import AICoachCard from "../components/AICoachCard";
import MoodCheckCard from "../components/MoodCheckCard";
import StreakRecoveryCard from "../components/StreakRecoveryCard";
import RecentProjectsList from "../components/RecentProjectsList";
import BadgesWidget from "../components/BadgesWidget";
import Footer from "../components/Footer";

import {
  mockStudentProfile,
  mockTodaysChallenge,
  mockAICoachData,
  mockStreakRecovery,
  mockRecentProjects,
  mockBadges,
  mockEmptyStateData,
} from "../data/mockDashboardData";

function Dashboard() {
  const [isDemoEmptyState, setIsDemoEmptyState] = useState(false);

  // Active dataset based on toggle
  const currentProfile = isDemoEmptyState ? mockEmptyStateData : mockStudentProfile;
  const currentRecentProjects = isDemoEmptyState ? [] : mockRecentProjects;
  const currentBadges = isDemoEmptyState ? [] : mockBadges;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Dashboard Top Sticky Navbar */}
      <DashboardNavbar profile={currentProfile} />

      {/* Main Dashboard Layout (Mobile-first 390px to Desktop) */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        
        {/* Demo Mode Controller Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-2.5 backdrop-blur-xl text-xs">
          <div className="flex items-center gap-2 text-slate-300 font-semibold">
            <Filter className="h-3.5 w-3.5 text-purple-400" />
            <span>Judge Demo State Selector:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDemoEmptyState(false)}
              className={`rounded-xl px-3 py-1.5 font-bold transition-colors ${
                !isDemoEmptyState
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              Normal Mode (Day 12 Active)
            </button>

            <button
              onClick={() => setIsDemoEmptyState(true)}
              className={`rounded-xl px-3 py-1.5 font-bold transition-colors ${
                isDemoEmptyState
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              First Day / Empty States
            </button>
          </div>
        </div>

        {/* Welcome Section Banner */}
        <WelcomeBanner profile={currentProfile} todaysChallenge={mockTodaysChallenge} />

        {/* 4 Metric Overview Cards */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          <ProgressCard
            icon={Flame}
            title="Current Streak"
            value={isDemoEmptyState ? "0 Days" : `${currentProfile.currentStreak} Days`}
            subtext={isDemoEmptyState ? "Start Day 1 to build streak!" : "100% Habit Consistency"}
            accentColor="from-amber-500 to-orange-500"
            delay={0.05}
          />

          <ProgressCard
            icon={Zap}
            title="XP Earned"
            value={isDemoEmptyState ? "0 XP" : `${currentProfile.totalXp.toLocaleString()} XP`}
            subtext={isDemoEmptyState ? "Level 1 Novice" : `550 XP to Level ${currentProfile.level + 1}`}
            progressPercent={isDemoEmptyState ? 0 : 81}
            accentColor="from-purple-500 to-indigo-500"
            delay={0.1}
          />

          <ProgressCard
            icon={CheckCircle2}
            title="Overall Progress"
            value={isDemoEmptyState ? "0%" : "20%"}
            subtext={isDemoEmptyState ? "0 of 60 Projects" : "12 of 60 Projects Done"}
            progressPercent={isDemoEmptyState ? 0 : 20}
            accentColor="from-blue-500 to-cyan-500"
            delay={0.15}
          />

          <ProgressCard
            icon={GitBranch}
            title="GitHub Commits"
            value={isDemoEmptyState ? "0 Commits" : `${currentProfile.githubCommits} Pushed`}
            subtext={isDemoEmptyState ? "No repos pushed yet" : "Verified Public Grid"}
            accentColor="from-emerald-500 to-teal-500"
            delay={0.2}
          />
        </div>

        {/* Main Content Two-Column Grid on Desktop */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Left Column: Today's Featured Challenge & Recent Projects (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Today's Challenge Featured Card */}
            <TodaysChallengeCard challenge={mockTodaysChallenge} />

            {/* AI Coach Card */}
            <AICoachCard coachData={mockAICoachData} todaysChallenge={mockTodaysChallenge} />

            {/* Recent Completed Projects List */}
            <RecentProjectsList projects={currentRecentProjects} />

          </div>

          {/* Right Column: Widgets (Mood Check, Streak Protection, Badges) (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Mood Check Card */}
            <MoodCheckCard />

            {/* Streak Recovery & Shield Card */}
            <StreakRecoveryCard recoveryData={mockStreakRecovery} />

            {/* Badges Widget */}
            <BadgesWidget badges={currentBadges} />

          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;