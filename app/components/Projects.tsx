"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Network Infrastructure",
      category: "IT Infrastructure",
      description: "Designed and implemented a complete network infrastructure for a 200+ employee organization with redundant systems and 99.9% uptime.",
      tech: ["Cisco", "pfSense", "VLANs", "VPN"],
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Built a full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
      tech: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      title: "AI-Powered Automation System",
      category: "Automation",
      description: "Developed an intelligent automation system that processes documents, extracts data, and generates reports using machine learning.",
      tech: ["Python", "TensorFlow", "FastAPI", "Docker"],
      gradient: "from-primary/20 to-purple-500/20",
    },
    {
      title: "Cloud Migration Solution",
      category: "Cloud Services",
      description: "Led the migration of legacy on-premise infrastructure to AWS, reducing costs by 40% while improving performance and scalability.",
      tech: ["AWS", "Terraform", "Kubernetes", "Docker"],
      gradient: "from-secondary/20 to-cyan-500/20",
    },
    {
      title: "Real-Time Analytics Dashboard",
      category: "Web Development",
      description: "Created a real-time analytics platform processing millions of events per day with interactive visualizations and custom reporting.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      gradient: "from-purple-500/20 to-primary/20",
    },
    {
      title: "Security Monitoring System",
      category: "IT Security",
      description: "Implemented comprehensive security monitoring with automated threat detection, incident response, and compliance reporting.",
      tech: ["ELK Stack", "Python", "Ansible", "Grafana"],
      gradient: "from-cyan-500/20 to-secondary/20",
    },
  ];

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world solutions delivering measurable results for businesses and organizations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <div className="text-6xl opacity-50">💼</div>
              </div>

              <div className="mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-dark border border-primary/30 rounded text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
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
          <p className="text-gray-400 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border-2 border-primary/50 rounded-full text-white font-medium hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
