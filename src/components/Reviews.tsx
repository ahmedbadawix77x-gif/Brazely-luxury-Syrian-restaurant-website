import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alexandra M.",
    role: "Food Critic, The Times",
    text: "Brazely redefines Middle Eastern fine dining. The flavors transport you straight to Damascus, while the ambiance speaks of timeless elegance. A masterpiece.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Regular Guest",
    text: "Every visit to Brazely is a journey. The Mixed Grill Royale is simply phenomenal — perfectly seasoned, beautifully presented, and absolutely unforgettable.",
    rating: 5,
  },
  {
    name: "Sarah & Michael",
    role: "Anniversary Celebration",
    text: "We celebrated our 10th anniversary here and it was magical. The staff treated us like family, and the Knafeh dessert was the best we've ever had.",
    rating: 5,
  },
  {
    name: "Omar H.",
    role: "Business Executive",
    text: "As someone from Aleppo, I can say this is the most authentic Syrian cuisine I've found. The attention to detail and respect for tradition is remarkable.",
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/40 text-primary text-xs font-sans uppercase tracking-[0.3em] mb-6">
            Guest Experiences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            What Our <span className="text-gradient-gold">Guests Say</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Discover why discerning diners choose Brazely for their most memorable
            culinary experiences.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-background border border-border p-8 hover:border-primary/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-sans text-foreground/80 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="border-t border-border pt-4">
                <h4 className="font-serif text-lg text-gradient-gold">
                  {review.name}
                </h4>
                <p className="font-sans text-sm text-muted-foreground">
                  {review.role}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(201,169,98,0.1)]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-primary/30 bg-background/50">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="font-serif text-2xl text-gradient-gold">4.9</span>
            <span className="font-sans text-sm text-muted-foreground">
              Based on 500+ Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
