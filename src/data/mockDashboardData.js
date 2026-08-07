export const mockStudentProfile = {
  name: "Demo Student",
  handle: "@demostudent",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  level: 5,
  levelTitle: "Full-Stack AI Builder",
  currentStreak: 12,
  longestStreak: 12,
  totalXp: 2450,
  nextLevelXp: 3000,
  completedProjectsCount: 12,
  totalProjects: 60,
  githubCommits: 12,
  streakShields: 1,
};

export const mockTodaysChallenge = {
  dayNumber: 12,
  title: "AI Document Summarizer Microservice",
  category: "AI & Full-Stack",
  difficulty: "Intermediate",
  estimatedTime: "45 mins",
  description:
    "Build an asynchronous REST microservice that takes PDF/text document URLs, extracts contents, and generates structured summaries using the Gemini API.",
  techStack: ["React", "Node.js", "Gemini API", "Tailwind CSS"],
  testCasesCount: 8,
  passedTests: 0,
  explanation: {
    overview:
      "Today's goal is building a production-ready document summarization API. You will learn to handle multipart form data, invoke Gemini text generation model, and return structured JSON summaries.",
    keyConcepts: [
      "Asynchronous File Buffer Processing",
      "Structured JSON Output from LLMs",
      "Express API Error Handling & Rate Limiting",
    ],
    starterHint:
      "Use `multer` middleware for upload handling and pass the extracted text buffer directly to the Gemini API SDK.",
  },
};

export const mockAICoachData = {
  dailyMotivation:
    "“Day 12 is where async architecture meets real AI capabilities. Take it step-by-step — you've already completed 11 full projects!”",
  personalizedStudyTip:
    "💡 Pro-tip for Day 12: Test your file extraction logic with small sample text files first before running large PDFs.",
};

export const mockMoodResponses = {
  great: {
    mood: "great",
    label: "Feeling Great 🙂",
    message: "Awesome energy! You're in peak flow state. Let's tackle today's Day 12 AI Summarizer challenge and keep your 12-day streak blazing! 🔥",
    recommendedAction: "Jump into Day 12 Challenge",
    badgeColor: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
  },
  okay: {
    mood: "okay",
    label: "Okay 😐",
    message: "Steady progress is victory! You don't have to sprint today — take 20 minutes to complete the core file extraction logic first.",
    recommendedAction: "Try Step 1 (20 Mins)",
    badgeColor: "text-blue-400 bg-blue-500/20 border-blue-500/30",
  },
  help: {
    mood: "help",
    label: "Need Help 😓",
    message: "No stress at all! Programming is all about breaking big problems into tiny micro-steps. Ask the AI assistant for starter boilerplate.",
    recommendedAction: "Get AI Boilerplate Code",
    badgeColor: "text-purple-400 bg-purple-500/20 border-purple-500/30",
  },
};

export const mockStreakRecovery = {
  isMissed: false, // Can be toggled in demo
  missedDay: 11,
  bonusChallenge: {
    title: "15-Min Quick Unit Test Recovery",
    description: "Write 3 unit test assertions for the Day 11 Redis Caching Service to protect your 12-day streak shield.",
    rewardXp: 150,
    estimatedTime: "12 mins",
  },
};

export const mockRecentProjects = [
  {
    day: 11,
    title: "Redis Caching Microservice",
    completedDate: "Yesterday",
    score: "98/100",
    testStatus: "8/8 Passed",
    githubRepo: "abtalks-day-11-redis-cache",
    accent: "from-purple-500 to-indigo-500",
  },
  {
    day: 10,
    title: "JWT Authentication & Role Middleware",
    completedDate: "2 days ago",
    score: "95/100",
    testStatus: "6/6 Passed",
    githubRepo: "abtalks-day-10-jwt-auth",
    accent: "from-indigo-500 to-blue-500",
  },
  {
    day: 9,
    title: "Node.js CLI Task Tracker",
    completedDate: "3 days ago",
    score: "100/100",
    testStatus: "10/10 Passed",
    githubRepo: "abtalks-day-9-cli-tracker",
    accent: "from-blue-500 to-cyan-500",
  },
];

export const mockBadges = [
  {
    id: "streak_10",
    title: "10-Day Streak Master",
    description: "Coded 10 consecutive days without missing",
    icon: "🔥",
    unlocked: true,
  },
  {
    id: "ai_pioneer",
    title: "AI Integration Pioneer",
    description: "Built 3 AI-powered microservices",
    icon: "🤖",
    unlocked: true,
  },
  {
    id: "git_god",
    title: "GitHub Grid Hero",
    description: "Pushed 10+ verified commits",
    icon: "🐙",
    unlocked: true,
  },
  {
    id: "halfway",
    title: "Halfway Hero (Day 30)",
    description: "Complete 30 challenge days",
    icon: "🏆",
    unlocked: false,
  },
];

// Empty State Fallbacks for First Day in Challenge
export const mockEmptyStateData = {
  name: "Demo Student",
  handle: "@demostudent",
  level: 1,
  levelTitle: "Novice Coder",
  currentStreak: 0,
  totalXp: 0,
  completedProjectsCount: 0,
  githubCommits: 0,
  recentProjects: [],
  badges: [],
};
