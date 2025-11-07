"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/95 backdrop-blur-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-heading font-bold gradient-text cursor-pointer"
        >
          MK
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#00D9FF" }}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all"
        >
          Get In Touch
        </motion.button>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5 cursor-pointer">
            <div className="w-full h-0.5 bg-primary"></div>
            <div className="w-full h-0.5 bg-primary"></div>
            <div className="w-full h-0.5 bg-primary"></div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
