import { motion } from "framer-motion";
import aboutImg from "@/assets/about.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-background rounded-3xl -z-10 shadow-sm transform -rotate-3"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square lg:aspect-[4/5]">
              <img 
                src={aboutImg} 
                alt="Livia Fashion Atelier" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start order-1 lg:order-2"
          >
            <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              A Heritage of <br/>
              <span className="italic text-muted-foreground">Quality & Trust</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <p>
                Livia Fashion was born from a simple belief: clothing should be a beautiful extension of who we are, offering comfort without compromising on elegance. 
              </p>
              <p>
                What started as a small passion project has blossomed into an online destination for families seeking high-quality, trend-focused collections. We meticulously source our fabrics to ensure they feel as good against the skin as they look to the eye.
              </p>
              <p>
                Whether it's a playful summer dress for your little one or a sophisticated silhouette for yourself, every piece in our collection is curated with love, care, and an unwavering commitment to customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border w-full">
              <div>
                <h4 className="font-serif text-3xl text-foreground mb-2">Premium</h4>
                <p className="text-sm text-muted-foreground">Quality Fabrics</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-foreground mb-2">Modern</h4>
                <p className="text-sm text-muted-foreground">Design Aesthetic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
