import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TechStackSection from "@/components/TechStackSection";
import WorkSection from "@/components/WorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";

const Index = () => {
  return (
    <>
      <SkipToContent />
      <main id="main-content" className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TechStackSection />
        <WorkSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
