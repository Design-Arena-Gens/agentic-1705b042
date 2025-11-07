"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Full-Stack Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, responsive, and optimized for performance.",
      features: ["Responsive Design", "SEO Optimization", "API Development", "Database Design"],
    },
    {
      icon: "🔧",
      title: "IT Infrastructure Solutions",
      description: "Complete network architecture, server setup, and infrastructure management. Secure, reliable, and scalable systems for your organization.",
      features: ["Network Design", "Cloud Migration", "Server Management", "Security Audits"],
    },
    {
      icon: "🤖",
      title: "Automation Engineering",
      description: "Intelligent automation solutions that streamline workflows and increase productivity. From simple scripts to complex AI-powered systems.",
      features: ["Process Automation", "AI Integration", "Custom Scripts", "Workflow Optimization"],
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Deploy and manage applications on AWS, Azure, or Google Cloud. Containerization, orchestration, and continuous deployment pipelines.",
      features: ["Cloud Architecture", "DevOps Setup", "Container Management", "CI/CD Pipelines"],
    },
    {
      icon: "🔐",
      title: "Security & Compliance",
      description: "Comprehensive security assessments, implementation of best practices, and compliance solutions for your IT infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Compliance Setup", "Risk Assessment"],
    },
    {
      icon: "📊",
      title: "System Integration",
      description: "Seamlessly connect your existing systems with new technologies. API development, third-party integrations, and data synchronization.",
      features: ["API Development", "Third-party Integration", "Data Migration", "System Optimization"],
    },
  ];

  return (
    <section id="services" className="relative section-padding bg-darkGray/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
