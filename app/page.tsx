import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TickerBar from "@/components/sections/TickerBar";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import ServiceAreas from "@/components/sections/ServiceAreas";
import WhyElco from "@/components/sections/WhyElco";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FreeQuote from "@/components/sections/FreeQuote";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TickerBar />
      <Stats />
      <Services />
      <ServiceAreas />
      <WhyElco />
      <Testimonials />
      <Faq />
      <FreeQuote />
      <Footer />
    </main>
  );
}
