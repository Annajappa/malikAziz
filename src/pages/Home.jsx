import HeroSection from "../components/Herosection";
import ServicesSection from "../components/ServiseSection";
import ToolsSection from "../components/ToolsSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import Services from "../components/Services";
import IndustriesSection from "../components/Industriesection";
import TrustSection from "../components/TrustSection";
import TestimonialCarousel from "../components/TestimonialCarousel";
import NewsSection from "../components/NewsSections";
import ContactCTA from "../components/ContactCTA";


const Home = () =>{
    return (
        <>
        <HeroSection />
        <ServicesSection />
        <ToolsSection />
        <WhoWeAreSection />
        <Services />
        <IndustriesSection />
        <TrustSection />
        <TestimonialCarousel />
        <NewsSection />
        <ContactCTA />
        </>
        
    );
}
export default Home;