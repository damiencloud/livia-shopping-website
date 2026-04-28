import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-8"
          >
            <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2">
              New Season
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground">
              Style That Speaks <br />
              <span className="text-primary italic">for Every Generation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
              Discover trendy and comfortable fashion for kids and women, crafted with elegance and care. A sunlit boutique experience, online.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 group" asChild>
                <a href="#featured">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-foreground/20 text-foreground hover:bg-muted" asChild>
                <a href="#collections">
                  Explore Collection
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -z-10 blur-2xl"></div>
            <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-auto lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={heroImg}
                alt="Mother and daughter in matching elegant outfits"
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Decorative element */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-10 -left-10 bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden md:block max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-muted"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold">10k+</span>
                  <span className="text-xs text-muted-foreground">Happy Customers</span>
                </div>
              </div>
              <p className="text-xs text-foreground/80 italic font-serif">"The perfect blend of comfort and style for my daughter and me."</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
