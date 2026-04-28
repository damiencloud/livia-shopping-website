import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import kidsImg from "@/assets/kids-collection.png";
import ladiesImg from "@/assets/ladies-collection.png";

export function Collections() {
  return (
    <section id="collections" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Two sides of the same brand story. Thoughtfully curated for mothers and daughters who appreciate quality and style.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Kids Collection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative rounded-[2rem] overflow-hidden bg-muted flex flex-col justify-end min-h-[500px] lg:min-h-[600px]"
          >
            <div className="absolute inset-0">
              <img 
                src={kidsImg} 
                alt="Kids Collection" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            <div className="relative z-10 p-10 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Little Livia</h3>
              <p className="text-white/80 mb-8 max-w-md font-light text-lg">
                Playful, comfortable, and beautifully crafted clothes for children. Because every adventure deserves the perfect outfit.
              </p>
              <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-8">
                Shop Kids Wear
              </Button>
            </div>
          </motion.div>

          {/* Ladies Collection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative rounded-[2rem] overflow-hidden bg-muted flex flex-col justify-end min-h-[500px] lg:min-h-[600px]"
          >
            <div className="absolute inset-0">
              <img 
                src={ladiesImg} 
                alt="Ladies Collection" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            
            <div className="relative z-10 p-10 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Livia Femme</h3>
              <p className="text-white/80 mb-8 max-w-md font-light text-lg">
                Refined, modern, and effortless silhouettes for the contemporary woman. Everyday elegance redefined.
              </p>
              <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-8">
                Shop Ladies Wear
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
