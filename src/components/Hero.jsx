function Hero() {
  return (
    <section className="px-6 pt-12 pb-16 text-center">
      <p className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700">
        🚀 AI Powered Coding Journey
      </p>

      <h1 className="mt-6 text-5xl font-extrabold leading-tight">
        Build Your
        <span className="text-purple-600"> Coding Habit</span>
        <br />
        in 60 Days
      </h1>

      <p className="mt-6 text-gray-500 text-lg">
        Stay consistent, build real projects, grow your GitHub,
        and become recruiter-ready with AI guidance.
      </p>

      <button className="mt-8 rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white hover:bg-purple-700 transition">
        Start Challenge →
      </button>
    </section>
  );
}

export default Hero;