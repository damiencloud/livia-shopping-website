import { motion } from "framer-motion";
import trendingImg from "@/assets/trending.png";
import { Button } from "@/components/ui/button";

export function TrendingBanner() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
          
          <div className="relative h-[400px] md:h-[500px] w-full">
            <img 
              src={trendingImg} 
              alt="Trending Collection" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
              <span className="text-white/80 font-semibold tracking-widest text-sm uppercase mb-4 block">
                Editor's Pick
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
                The Sunlit <br/>
                <span className="italic text-primary-foreground/90">Capsule Collection</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-md font-light">
                Embrace the season with our curated selection of breathable linens and soft pastels. Designed for effortless elegance.
              </p>
              <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-8">
                Shop The Edit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
