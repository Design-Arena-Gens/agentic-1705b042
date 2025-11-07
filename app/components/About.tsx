"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-darkGray/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-8xl font-heading font-bold gradient-text">MK</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-6 gradient-text">
              Professional Tech Architect
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              With extensive experience in IT solutions and full-stack development, I specialize in building robust, scalable systems that solve real-world problems. My expertise spans across networking infrastructure, modern web technologies, and intelligent automation systems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Based in Karachi, Pakistan, I work with businesses and organizations to transform their digital infrastructure through cutting-edge technology solutions. From architecting complex networks to developing intuitive web applications, I bring technical excellence to every project.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">100+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl font-heading font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
