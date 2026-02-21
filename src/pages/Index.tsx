import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedVideos from "@/components/FeaturedVideos";
// import DestinationsSection from "@/components/DestinationsSection"; // Hidden for now
import PerfumeShop from "@/components/PerfumeShop";
import FrutenFraten from "@/components/FrutenFraten";
import WolfgangSection from "@/components/WolfgangSection";
import FrutenFratenBar from "@/components/FrutenFratenBar";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PerfumeShop />
      <FeaturedVideos />
      {/* <DestinationsSection /> */}
      <FrutenFraten />
      <WolfgangSection />
      <FrutenFratenBar />
      <FooterSection />
    </div>
  );
};

export default Index;
