"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Karachi, Pakistan",
    },
    {
      icon: "📧",
      label: "Email",
      value: "murad.khan@example.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/muradkhan",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/muradkhan",
    },
  ];

  return (
    <section id="contact" className="relative section-padding bg-darkGray/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss IT solutions? I&apos;m always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you need a complete IT infrastructure overhaul, a custom web application, or automation solutions, I&apos;m here to help. Let&apos;s discuss how we can work together to achieve your goals.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="text-lg font-heading font-bold mb-4 text-primary">
                Available for:
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Full-time & Contract Positions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Consulting & Advisory Services
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Project-based Collaborations
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20 pt-10 border-t border-primary/20"
      >
        <p className="text-gray-400 text-sm">
          © 2024 Murad Khan. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}
