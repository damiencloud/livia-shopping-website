import { motion } from "framer-motion";
import { Smile, Heart, Truck, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Kids Wear Collection",
    description: "Comfortable, colorful, and trendy styles designed for active little ones."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Ladies Fashion",
    description: "Modern, elegant, and versatile everyday wear that feels as good as it looks."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Convenient Shopping",
    description: "Seamless online experience with swift delivery straight to your doorstep."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Quality & Value",
    description: "Premium fabrics and impeccable stitching at prices that delight."
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
