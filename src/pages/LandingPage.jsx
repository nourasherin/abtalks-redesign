import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AIMotivationCard from "../components/AIMotivationCard";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Realistic Stats Section */}
        <StatsSection />

        {/* AI Adaptive Motivation Card */}
        <AIMotivationCard />

        {/* Key Features Section */}
        <FeaturesSection />

        {/* Call to Action Banner */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;