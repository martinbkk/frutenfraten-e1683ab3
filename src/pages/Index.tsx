import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedVideos from "@/components/FeaturedVideos";
import DestinationsSection from "@/components/DestinationsSection";
import PerfumeShop from "@/components/PerfumeShop";
import FrutenFraten from "@/components/FrutenFraten";
import WolfgangSection from "@/components/WolfgangSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PerfumeShop />
      <FeaturedVideos />
      <DestinationsSection />
      <FrutenFraten />
      <WolfgangSection />
      <FooterSection />
    </div>
  );
};

export default Index;
