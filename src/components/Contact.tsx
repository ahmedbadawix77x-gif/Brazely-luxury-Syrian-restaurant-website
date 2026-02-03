import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/40 text-primary text-xs font-sans uppercase tracking-[0.3em] mb-6">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Location & <span className="text-gradient-gold">Contact</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            We welcome you to experience the warmth of Syrian hospitality. Find us
            in the heart of the city.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-full min-h-[400px] bg-card border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-charcoal-deep flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="font-serif text-xl text-foreground/80">
                  123 Culinary Avenue
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Downtown District, City 10001
                </p>
              </div>
            </div>
            {/* Decorative Frame */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-primary/50" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-primary/50" />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-6 bg-card border border-border group hover:border-primary/50 transition-colors">
                <MapPin className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">Address</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  123 Culinary Avenue
                  <br />
                  Downtown District
                  <br />
                  City, 10001
                </p>
              </div>

              {/* Phone */}
              <div className="p-6 bg-card border border-border group hover:border-primary/50 transition-colors">
                <Phone className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Email */}
              <div className="p-6 bg-card border border-border group hover:border-primary/50 transition-colors">
                <Mail className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">Email</h3>
                <a
                  href="mailto:hello@brazely.com"
                  className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@brazely.com
                </a>
              </div>

              {/* Hours */}
              <div className="p-6 bg-card border border-border group hover:border-primary/50 transition-colors">
                <Clock className="w-6 h-6 text-primary mb-4" />
                <h3 className="font-serif text-lg text-foreground mb-2">Hours</h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Mon - Thu: 5PM - 10PM
                  <br />
                  Fri - Sun: 5PM - 11PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-sans text-sm text-foreground/80 uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-border flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="TripAdvisor"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Private Events CTA */}
            <div className="p-8 bg-gradient-to-br from-card to-background border border-primary/30">
              <h3 className="font-serif text-2xl text-gradient-gold mb-3">
                Private Events & Catering
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                Host your special occasion at Brazely. From intimate gatherings to
                grand celebrations, we craft unforgettable experiences.
              </p>
              <a
                href="mailto:events@brazely.com"
                className="inline-block px-6 py-3 border border-primary text-primary font-sans text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
