"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "IT Infrastructure",
      skills: [
        { name: "Network Architecture", level: 93 },
        { name: "Cloud Services (AWS/Azure)", level: 85 },
        { name: "Linux Administration", level: 90 },
        { name: "Security & Firewalls", level: 87 },
      ],
    },
    {
      title: "Automation & AI",
      skills: [
        { name: "Python Automation", level: 91 },
        { name: "API Integration", level: 94 },
        { name: "AI/ML Integration", level: 86 },
        { name: "DevOps & CI/CD", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience in enterprise solutions and modern development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-heading font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-heading font-bold mb-6 text-gray-300">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Docker",
              "Kubernetes",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "Git",
              "GraphQL",
              "REST APIs",
              "Ansible",
              "Terraform",
              "Nginx",
              "Jenkins",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: "rgba(0, 217, 255, 1)" }}
                className="px-4 py-2 glass-card text-sm font-medium cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
