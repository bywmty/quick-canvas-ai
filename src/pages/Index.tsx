import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MaaSSection from "@/components/MaaSSection";
import FlywheelSection from "@/components/FlywheelSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MaaSSection />
      <FlywheelSection />
      <TestimonialsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
