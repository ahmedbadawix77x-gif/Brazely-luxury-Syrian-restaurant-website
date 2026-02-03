import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxurious Syrian dining experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Arabic Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/40 text-primary text-xs font-sans uppercase tracking-[0.3em]">
            Authentic Syrian Cuisine
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight"
        >
          <span className="text-gradient-gold">Brazely</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90 italic mb-4 max-w-3xl mx-auto"
        >
          The Essence of Syrian & Middle Eastern Fine Dining
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Where ancient traditions meet contemporary elegance. Experience the rich
          flavors of Damascus, crafted with passion and served with grace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group px-8 py-4 bg-primary text-primary-foreground font-sans text-sm font-medium uppercase tracking-wider hover:bg-gold-light transition-all duration-300 hover-gold-glow"
          >
            View Our Menu
          </a>
          <a
            href="#reservations"
            className="px-8 py-4 border border-foreground/30 text-foreground font-sans text-sm font-medium uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#menu"
          className="flex flex-col items-center gap-2 text-foreground/50 hover:text-primary transition-colors"
        >
          <span className="text-xs font-sans uppercase tracking-widest">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
