import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import prod1 from "@/assets/prod1.png";
import prod2 from "@/assets/prod2.png";
import prod3 from "@/assets/prod3.png";
import prod4 from "@/assets/prod4.png";
import prod5 from "@/assets/prod5.png";

const products = [
  {
    id: 1,
    name: "Blush Summer Dress",
    category: "Kids Wear",
    price: "$45.00",
    image: prod1,
  },
  {
    id: 2,
    name: "Sage Midi Dress",
    category: "Ladies Fashion",
    price: "$89.00",
    image: prod2,
  },
  {
    id: 3,
    name: "Terracotta Play Set",
    category: "Kids Wear",
    price: "$38.00",
    image: prod3,
  },
  {
    id: 4,
    name: "Dusty Rose Silk Blouse",
    category: "Ladies Fashion",
    price: "$65.00",
    image: prod4,
  },
  {
    id: 5,
    name: "Cream Knit Cardigan",
    category: "Kids Wear",
    price: "$42.00",
    image: prod5,
  },
  // Reusing some images for the 6th item since 6th generation failed
  {
    id: 6,
    name: "Sand Linen Trousers",
    category: "Ladies Fashion",
    price: "$75.00",
    image: prod2,
  },
];

export function Featured() {
  const { toast } = useToast();

  const handleAddToCart = (name: string) => {
    toast({
      title: "Added to cart",
      description: `${name} has been added to your shopping bag.`,
    });
  };

  return (
    <section id="featured" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Featured Pieces</h2>
            <p className="text-muted-foreground">Handpicked selections combining comfort, quality, and timeless style for both you and your little ones.</p>
          </div>
          <Button variant="link" className="text-foreground p-0 h-auto font-semibold uppercase tracking-widest text-xs">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                
                <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    className="w-full bg-background/90 backdrop-blur-sm text-foreground hover:bg-background"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product.name);
                    }}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</span>
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                  <span className="font-medium text-foreground">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
