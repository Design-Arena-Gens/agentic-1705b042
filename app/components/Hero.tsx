"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Murad Khan</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building Smarter Systems for the Digital Age
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            IT solutions expert and developer specializing in modern web systems, automation, and on-demand AI integration.
            <br />
            <span className="text-primary">Based in Karachi, Pakistan</span>
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium shadow-lg shadow-primary/30 transition-all"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 217, 255, 1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary/50 rounded-full text-white font-medium hover:bg-primary/10 transition-all"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated tech icons floating */}
        <motion.div
          className="absolute top-1/4 left-10 opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-20 h-20 border border-primary/30 rounded-lg"></div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-10 opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-16 h-16 border border-secondary/30 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 opacity-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <div className="w-12 h-12 border border-primary/30 rotate-45"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
