import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuMezze from "@/assets/menu-mezze.jpg";
import menuGrill from "@/assets/menu-grill.jpg";

const menuCategories = [
  {
    id: "cold-mezze",
    name: "Cold Mezze",
    description: "Traditional appetizers served cold",
    items: [
      { name: "Hummus", description: "Silky chickpea purée with tahini, lemon, and Aleppo olive oil", price: 12 },
      { name: "Baba Ganoush", description: "Smoky roasted eggplant with tahini and pomegranate seeds", price: 14 },
      { name: "Mutabal", description: "Charred eggplant blended with yogurt and garlic", price: 13 },
      { name: "Tabbouleh", description: "Fresh parsley salad with bulgur, tomato, and mint", price: 11 },
      { name: "Fattoush", description: "Crispy pita salad with sumac dressing", price: 12 },
      { name: "Labneh", description: "Strained yogurt with za'atar and olive oil", price: 10 },
    ],
  },
  {
    id: "hot-mezze",
    name: "Hot Mezze",
    description: "Warm appetizers from our kitchen",
    items: [
      { name: "Kibbeh", description: "Crispy bulgur shells filled with spiced lamb and pine nuts", price: 16 },
      { name: "Sambousek", description: "Golden pastry pockets with cheese or meat filling", price: 14 },
      { name: "Falafel", description: "Crispy herb-spiced chickpea fritters", price: 12 },
      { name: "Sujuk", description: "Spiced Lebanese sausage with tomato and peppers", price: 15 },
      { name: "Halloumi", description: "Grilled Cypriot cheese with honey and za'atar", price: 14 },
    ],
  },
  {
    id: "grills",
    name: "Grills & Kebabs",
    description: "Flame-grilled specialties",
    items: [
      { name: "Shish Taouk", description: "Marinated chicken skewers with garlic sauce", price: 28 },
      { name: "Kafta Kebab", description: "Spiced lamb and beef with parsley and onion", price: 32 },
      { name: "Lahm Meshwi", description: "Prime lamb cubes grilled to perfection", price: 38 },
      { name: "Mixed Grill Royale", description: "Selection of premium kebabs with all accompaniments", price: 55 },
      { name: "Chicken Shawarma", description: "Slow-roasted marinated chicken, carved to order", price: 26 },
      { name: "Lamb Chops", description: "Tender rack of lamb with herbs de Provence", price: 45 },
    ],
  },
  {
    id: "traditional",
    name: "Traditional Syrian",
    description: "Authentic recipes from Damascus",
    items: [
      { name: "Makloubeh", description: "Upside-down rice with lamb, eggplant, and spices", price: 34 },
      { name: "Mansaf", description: "Lamb cooked in fermented yogurt, served on rice", price: 38 },
      { name: "Mahshi", description: "Stuffed vegetables with herbed rice and lamb", price: 28 },
      { name: "Fatteh", description: "Layered chickpeas, pita, and yogurt with pine nuts", price: 22 },
      { name: "Molokhia", description: "Jute leaf stew with chicken, served with rice", price: 26 },
    ],
  },
  {
    id: "rice",
    name: "Oriental Rice",
    description: "Fragrant rice preparations",
    items: [
      { name: "Saffron Rice", description: "Basmati infused with saffron and rose water", price: 12 },
      { name: "Mujadara", description: "Lentils and rice with caramelized onions", price: 14 },
      { name: "Freekeh", description: "Smoked green wheat with roasted vegetables", price: 16 },
      { name: "Vermicelli Rice", description: "Buttered rice with toasted vermicelli", price: 10 },
    ],
  },
  {
    id: "bread",
    name: "Fresh Bread & Sides",
    description: "Baked fresh daily",
    items: [
      { name: "Saj Bread", description: "Paper-thin Lebanese flatbread", price: 5 },
      { name: "Manakeesh", description: "Za'atar or cheese flatbread", price: 8 },
      { name: "Pita Basket", description: "Warm house-baked pita bread", price: 6 },
      { name: "Pickled Vegetables", description: "House-made turnip and cucumber pickles", price: 6 },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings",
    items: [
      { name: "Baklava", description: "Layers of filo, pistachios, and honey syrup", price: 14 },
      { name: "Knafeh", description: "Crispy semolina with sweet cheese and rose syrup", price: 16 },
      { name: "Halawet el Jibn", description: "Sweet cheese rolls with clotted cream", price: 14 },
      { name: "Maamoul", description: "Date-filled semolina cookies with orange blossom", price: 12 },
      { name: "Ashta", description: "Clotted cream with pistachios and honey", price: 12 },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Beverages",
    description: "Traditional & modern refreshments",
    items: [
      { name: "Turkish Coffee", description: "Traditional cardamom-spiced coffee", price: 6 },
      { name: "Mint Tea", description: "Fresh mint leaves with green tea", price: 5 },
      { name: "Jallab", description: "Date and rose water drink with pine nuts", price: 8 },
      { name: "Ayran", description: "Chilled salted yogurt drink", price: 5 },
      { name: "Tamarind Juice", description: "Tangy tamarind refresher", price: 7 },
      { name: "Arak", description: "Traditional anise spirit (per glass)", price: 12 },
    ],
  },
];

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("cold-mezze");

  return (
    <section id="menu" className="py-24 md:py-32 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-arabic opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 border border-primary/40 text-primary text-xs font-sans uppercase tracking-[0.3em] mb-6">
            Culinary Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Our <span className="text-gradient-gold">Menu</span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A curated selection of authentic Syrian and Middle Eastern dishes,
            prepared with the finest ingredients and centuries-old recipes.
          </p>
        </motion.div>

        {/* Featured Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div className="relative group overflow-hidden">
            <img
              src={menuMezze}
              alt="Cold Mezze Selection"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl text-gradient-gold">Mezze Collection</h3>
              <p className="font-sans text-sm text-foreground/70">Traditional appetizers</p>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={menuGrill}
              alt="Grilled Kebabs"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-2xl text-gradient-gold">From the Grill</h3>
              <p className="font-sans text-sm text-foreground/70">Flame-kissed perfection</p>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 md:px-6 md:py-3 text-xs md:text-sm font-sans uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          {menuCategories.map(
            (category) =>
              activeCategory === category.id && (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <h3 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-2">
                      {category.name}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group flex items-start justify-between gap-4 p-4 border-b border-border/50 hover:bg-card/50 transition-all duration-300"
                      >
                        <div className="flex-1">
                          <h4 className="font-serif text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          <p className="font-sans text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="font-serif text-lg md:text-xl text-primary">
                            ${item.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mt-16"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-primary text-2xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};
