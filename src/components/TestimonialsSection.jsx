import { motion } from "framer-motion";
import { Star, Flame, Quote, Code2, CheckCircle2, UserCheck } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Career Switcher → Junior Full-Stack Dev",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      streak: "60 Days",
      quote:
        "“I spent months stuck in tutorial hell before ABTalks. Building one real project every single day gave me 60 distinct repositories on GitHub. Interviewers were blown away by my actual code submissions!”",
      projectBuilt: "AI Document Summarizer & SaaS API",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "CS Senior → Software Engineering Intern",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      streak: "45 Days",
      quote:
        "“The instant AI code reviews were a game-changer for me. When I missed Day 22 due to exams, the AI motivation card suggested a 15-minute refactor task that kept my streak alive without stress.”",
      projectBuilt: "Distributed Task Queue System",
      rating: 5,
    },
    {
      name: "Ananya Verma",
      role: "Frontend Dev → Full-Stack AI Specialist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      streak: "60 Days",
      quote:
        "“My GitHub contribution graph turned completely dark green! The daily bite-sized project structure made consistency effortless. I built more in 60 days than in 2 years of self-study.”",
      projectBuilt: "Multi-Agent Workflow Builder",
      rating: 5,
    },
  ];

  return (
    <section id="stories" className="relative py-20 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute right-10 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <UserCheck className="h-3.5 w-3.5 text-purple-400" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built by Developers, <span className="gradient-text">Loved by Learners</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            See how daily consistency and AI-guided micro-projects transformed self-taught developers, students, and career switchers.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-900 hover:shadow-2xl"
            >
              {/* Quote Icon Background Watermark */}
              <Quote className="pointer-events-none absolute right-4 top-4 h-20 w-20 text-slate-800/40 transition-colors group-hover:text-purple-500/10" />

              <div className="relative z-10 space-y-4">
                
                {/* Rating Stars & Streak Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-bold text-purple-300 border border-purple-500/30">
                    <Flame className="h-3.5 w-3.5 text-orange-400 fill-orange-400" />
                    <span>{item.streak} Streak</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              {/* Student Profile Info */}
              <div className="relative z-10 mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-purple-500/40 shadow-md"
                />
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.role}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-purple-400">
                    <Code2 className="h-3 w-3" />
                    <span>Key Project: {item.projectBuilt}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
