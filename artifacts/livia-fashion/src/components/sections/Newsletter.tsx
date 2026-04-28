import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to Livia!",
      description: "Check your email for your 10% off welcome code.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background rounded-[2.5rem] p-8 md:p-16 lg:p-24 text-center max-w-5xl mx-auto shadow-sm border border-primary/10 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">Join Our Community</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Subscribe to our newsletter for exclusive offers, early access to new collections, and <strong className="text-primary font-medium">10% off your first order</strong>.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="h-14 rounded-full bg-muted/50 border-transparent focus-visible:border-primary px-6 text-base"
              />
              <Button type="submit" className="h-14 rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 shrink-0">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
