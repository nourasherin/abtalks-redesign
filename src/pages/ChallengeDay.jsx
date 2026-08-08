import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Smile, Meh, Frown } from "lucide-react";

function ChallengeDay() {
  // Form states for proof of work
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [githubError, setGithubError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Mood state
  const [mood, setMood] = useState("great");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const urlPattern = /^(https?:\/\/).+/;
    if (github && !urlPattern.test(github)) {
      setGithubError("Please enter a valid URL.");
      valid = false;
    } else {
      setGithubError("");
    }
    if (linkedin && !urlPattern.test(linkedin)) {
      setLinkedinError("Please enter a valid URL.");
      valid = false;
    } else {
      setLinkedinError("");
    }
    if (!valid) return;
    const payload = { githubRepo: github, linkedInPost: linkedin };
    console.log("Day 12 proof submitted", payload);
    setSubmitted(true);
  };

  const encouragement = {
    great: "Awesome! Keep that momentum.",
    okay: "Steady progress – you’ve got this!",
    help: "No worries, ask for help and push forward!",
  };

  const recommendation = {
    great: "Proceed to implement a few‑shot prompt example.",
    okay: "Try a zero‑shot prompt first.",
    help: "Read the AI Mentor section for guidance.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto mt-4 p-4 sm:p-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl"
    >
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">Day 12</h1>
            <p className="text-lg text-slate-300">Prompt Engineering Fundamentals</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-purple-600 text-xs font-medium text-white">LEARN</span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span>Difficulty: Intermediate</span>
          <span>Estimated: 45 mins</span>
          <span>Progress: 12/60</span>
        </div>
      </header>

      {/* Description */}
      <section className="mb-6 text-slate-200">
        <p>
          Today you’ll explore prompt‑engineering techniques. Build and test system prompts, compare zero‑shot, few‑shot and chain‑of‑thought styles, and evaluate their performance on a fixed question set. By the end you’ll have a production‑ready prompt for your chatbot.
        </p>
      </section>

      {/* AI Explanation */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 p-4 rounded-xl border border-slate-800/80 bg-slate-900/30"
      >
        <h2 className="mb-2 text-lg font-semibold text-slate-100">AI Explanation</h2>
        <p className="text-slate-200 mb-2">
          Prompt engineering is about designing the text you give to a language model so it produces the answer you want. Think of it like giving clear instructions to a very smart assistant.
        </p>
        <div className="mb-2 text-slate-200 font-mono text-sm bg-slate-800/30 p-2 rounded">
          <strong>Zero‑shot example:</strong><br />
          <code>Summarize the following article.</code>
        </div>
        <div className="text-slate-200 font-mono text-sm bg-slate-800/30 p-2 rounded">
          <strong>Few‑shot example:</strong><br />
          <code>Summarize the article in one sentence.

Article: ...

Summary:</code>
        </div>
      </motion.section>

      {/* Learning Objectives */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Learning Objectives</h2>
        <ul className="space-y-2">
          {[
            "Understand zero-shot, few-shot, and chain-of-thought prompting",
            "Design multiple system prompt variations for the chatbot",
            "Compare prompts based on accuracy, compliance, and tone",
            "Evaluate prompt performance using a fixed question set",
            "Finalize the production-ready system prompt",
          ].map((obj, idx) => (
            <li key={idx} className="flex items-center text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-purple-400 mr-2" />
              {obj}
            </li>
          ))}
        </ul>
      </section>

      {/* Resources */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Resources</h2>
        <div className="flex flex-wrap gap-2">
          {["LLMs", "Prompt Templates"].map((r) => (
            <span key={r} className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-slate-600">
              {r}
            </span>
          ))}
        </div>
      </section>

      {/* AI Mentor */}
      <section className="mb-6 p-4 rounded-xl border border-slate-800/80 bg-slate-900/30">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">AI Mentor</h2>
        <p className="text-slate-200 mb-2">
          Prompt engineering is the art of crafting inputs that guide large language models to produce the desired output. Start by defining the role, tone, and constraints in a system prompt, then iterate with examples.
        </p>
        <p className="text-sm text-slate-400">💡 Hint: Use a few demonstration examples in the prompt to steer the model.</p>
      </section>

      {/* Mood Check */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Mood Check</h2>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setMood("great")}
            className={`flex-1 py-2 rounded-xl border ${mood === "great" ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-300"} transition-colors`}
          >
            <Smile className="inline-block mr-1" /> Feeling Great
          </button>
          <button
            type="button"
            onClick={() => setMood("okay")}
            className={`flex-1 py-2 rounded-xl border ${mood === "okay" ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-300"} transition-colors`}
          >
            <Meh className="inline-block mr-1" /> Doing Okay
          </button>
          <button
            type="button"
            onClick={() => setMood("help")}
            className={`flex-1 py-2 rounded-xl border ${mood === "help" ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-300"} transition-colors`}
          >
            <Frown className="inline-block mr-1" /> Need Help
          </button>
        </div>
        <p className="mt-2 text-sm text-slate-300">{encouragement[mood]}</p>
      </section>

      {/* Personalized Recommendation */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Personalized Recommendation</h2>
        <p className="text-slate-200">{recommendation[mood]}</p>
      </section>

      {/* Streak Recovery */}
      <section className="mb-6 p-4 rounded-xl border border-slate-800/80 bg-slate-900/30">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Streak Recovery</h2>
        <p className="text-slate-200 mb-2">
          Missed Day 11? Complete a quick 15‑minute unit‑test exercise to regain your streak shield.
        </p>
        <button className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-5 transition-colors">
          Start Recovery
        </button>
      </section>

      {/* Proof of Work */}
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-slate-100">Proof of Work</h2>
        {submitted ? (
          <div className="flex items-center text-green-400">
            <CheckCircle2 className="h-6 w-6 mr-2" />
            <span className="text-slate-100">Day 12 proof submitted</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300">GitHub Repository / Commit</label>
              <input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                placeholder="https://github.com/your-repo"
              />
              {githubError && <p className="mt-1 text-xs text-red-400">{githubError}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">LinkedIn Post</label>
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500"
                placeholder="https://linkedin.com/posts/..."
              />
              {linkedinError && <p className="mt-1 text-xs text-red-400">{linkedinError}</p>}
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-5 transition-colors"
            >
              Submit Proof
            </button>
          </form>
        )}
      </section>
    </motion.div>
  );
}

export default ChallengeDay;