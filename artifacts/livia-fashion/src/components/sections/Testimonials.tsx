import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Mother of two",
    content: "The quality of the kids' dresses is exceptional. The fabric is so soft, and my daughter refuses to wear anything else. Absolutely love Livia Fashion!",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "Regular Customer",
    content: "I bought a midi dress from the ladies' collection and I'm amazed by the fit. It looks like a high-end designer piece but at such an affordable price.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "First-time Buyer",
    content: "Beautiful designs and the customer service is wonderful. The matching sets are just too adorable. Will definitely be shopping here again.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground mb-4">Kind Words</h2>
          <p className="text-muted-foreground">What our lovely community has to say about us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-muted/50 p-8 rounded-2xl border border-border"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-8 italic font-serif leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
