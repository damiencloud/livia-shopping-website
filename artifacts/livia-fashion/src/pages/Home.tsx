import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrendingBanner } from "@/components/sections/TrendingBanner";
import { Featured } from "@/components/sections/Featured";
import { Services } from "@/components/sections/Services";
import { Collections } from "@/components/sections/Collections";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Collections />
        <Featured />
        <TrendingBanner />
        <About />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
