import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript", "PHP", "MATLAB"]
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS", "JavaScript", "PHP", "MySQL"]
  },
  {
    title: "Computer Science Core",
    skills: ["OOP", "Data Structures", "Operating Systems", "Artificial Intelligence", "Network Optimization", "Version Control"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "Keras", "Flask", "SQLAlchemy", "BERT", "RoBERTa", "Transformers"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitLab", "MATLAB", "MySQL", "R Studio"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-6 rounded-3xl shadow-soft border border-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-4 border-b border-gray-200 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-surface text-secondary text-sm rounded-lg shadow-sm border border-gray-100 hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
