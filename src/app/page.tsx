import AnimatedUserProfile from "@/components/AnimatedUserProfile";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import GridCards from "@/components/GridCards";
import HeroSection from "@/components/HeroSection";
import HoverCards from "@/components/HoverCards";
import Instructor from "@/components/Instructor";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <GridCards/>
    <HoverCards/>
    <Instructor/>
    <Footer/>
    </main>
  );
}
