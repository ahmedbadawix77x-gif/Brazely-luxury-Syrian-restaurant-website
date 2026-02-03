import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl text-gradient-gold mb-4">Brazely</h2>
            <p className="font-sans text-muted-foreground max-w-md mb-6">
              Experience the finest Syrian and Middle Eastern cuisine in an
              atmosphere of timeless elegance. Where every meal is a celebration
              of heritage and flavor.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-serif text-sm text-primary">★★★★★</span>
              <span className="font-sans text-xs text-muted-foreground">
                Award-Winning Cuisine
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-foreground mb-6">Explore</h3>
            <ul className="space-y-3">
              {["Menu", "About", "Reservations", "Private Events", "Gift Cards"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="font-sans text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-foreground mb-6">Contact</h3>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li>123 Culinary Avenue</li>
              <li>Downtown District, City 10001</li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@brazely.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@brazely.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-primary text-lg">✦</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brazely. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
