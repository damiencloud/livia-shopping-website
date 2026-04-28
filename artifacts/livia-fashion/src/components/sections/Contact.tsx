import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl text-foreground mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Whether you have a question about sizing, styling, or your order, we're here to help. Drop us a message or connect via WhatsApp.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <a href="tel:7012879774" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    7012879774
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a href="mailto:hello@liviafashion.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    hello@liviafashion.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">WhatsApp</h4>
                  <a 
                    href="https://wa.me/917012879774" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#25D366] transition-colors text-lg flex items-center gap-2"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <Button 
              asChild 
              className="bg-[#25D366] text-white hover:bg-[#1ebd5a] rounded-full px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://wa.me/917012879774" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6 mr-2" />
                Message on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border"
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                <Input id="name" required placeholder="Jane Doe" className="bg-muted border-transparent focus-visible:border-primary rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                <Input id="email" type="email" required placeholder="jane@example.com" className="bg-muted border-transparent focus-visible:border-primary rounded-xl h-12" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="How can we help you today?" 
                  className="bg-muted border-transparent focus-visible:border-primary rounded-xl min-h-[150px] resize-none" 
                />
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 text-base">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
