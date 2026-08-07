import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import HowItWorksSection from "../components/HowItWorksSection";
import AIMotivationCard from "../components/AIMotivationCard";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
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

        {/* Realistic Stats & Live Activity Ticker */}
        <StatsSection />

        {/* How It Works 4-Step Methodology */}
        <HowItWorksSection />

        {/* AI Adaptive Motivation & Streak Protection Card */}
        <AIMotivationCard />

        {/* Key Features Section with Category Tabs */}
        <FeaturesSection />

        {/* Student Testimonials Section */}
        <TestimonialsSection />

        {/* Call to Action Banner */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;