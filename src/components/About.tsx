import { motion } from "framer-motion";
import aboutChef from "@/assets/about-chef.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={aboutChef}
                alt="Chef preparing traditional Syrian dishes"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* Gold Frame Accent */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-primary" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-primary text-primary-foreground p-6 text-center"
            >
              <span className="font-serif text-4xl font-bold block">30+</span>
              <span className="font-sans text-xs uppercase tracking-wider">Years of Heritage</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 border border-primary/40 text-primary text-xs font-sans uppercase tracking-[0.3em] mb-6">
              Our Story
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              A Legacy of{" "}
              <span className="text-gradient-gold">Syrian Culinary</span>{" "}
              Excellence
            </h2>

            <div className="space-y-6 font-sans text-foreground/80 leading-relaxed">
              <p>
                At <span className="text-primary font-medium">Brazely</span>, every dish
                tells a story — a story of ancient Damascus, of spice-laden bazaars,
                of family recipes passed down through generations. Our journey began
                with a simple dream: to share the authentic flavors of Syria with the
                world.
              </p>

              <p>
                Our kitchen is a sanctuary where tradition meets artistry. We source
                the finest ingredients — from aromatic Aleppo peppers to fragrant
                saffron from the Levant — ensuring each plate reflects the rich
                heritage of Middle Eastern cuisine.
              </p>

              <p>
                The art of Syrian hospitality, known as <em>"Karam"</em>, is woven
                into every aspect of your dining experience. From the moment you
                enter, you become part of our extended family — welcomed with warmth,
                served with grace, and sent home with cherished memories.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { label: "Authentic Recipes", value: "200+" },
                { label: "Master Chefs", value: "12" },
                { label: "Premium Ingredients", value: "100%" },
                { label: "Guest Satisfaction", value: "98%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary pl-4"
                >
                  <span className="font-serif text-2xl md:text-3xl text-gradient-gold block">
                    {stat.value}
                  </span>
                  <span className="font-sans text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
