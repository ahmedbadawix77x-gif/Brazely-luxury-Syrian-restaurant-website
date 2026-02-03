import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, Check } from "lucide-react";

export const Reservations = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        occasion: "",
        notes: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservations" className="py-24 md:py-32 bg-background relative">
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
            Book Your Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Make a <span className="text-gradient-gold">Reservation</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Reserve your table and prepare for an unforgettable journey through
            the flavors of Syria and the Middle East.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border p-8 md:p-12 relative">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary" />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-4">
                    Reservation Confirmed
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    Thank you for choosing Brazely. We look forward to welcoming you.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm text-foreground/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-foreground/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-sans text-sm text-foreground/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Date, Time, Guests */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block font-sans text-sm text-foreground/80 mb-2">
                        <Calendar className="inline w-4 h-4 mr-2 text-primary" />
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-foreground/80 mb-2">
                        <Clock className="inline w-4 h-4 mr-2 text-primary" />
                        Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select Time</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                        <option value="21:30">9:30 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-sm text-foreground/80 mb-2">
                        <Users className="inline w-4 h-4 mr-2 text-primary" />
                        Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block font-sans text-sm text-foreground/80 mb-2">
                      Special Occasion (Optional)
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select an Occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="celebration">Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block font-sans text-sm text-foreground/80 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground font-sans focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Dietary restrictions, seating preferences, etc."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-sans text-sm font-medium uppercase tracking-wider hover:bg-gold-light transition-all duration-300 hover-gold-glow"
                  >
                    Confirm Reservation
                  </button>

                  <p className="text-center font-sans text-xs text-muted-foreground">
                    By reserving, you agree to our cancellation policy. Please arrive
                    15 minutes before your reservation time.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
