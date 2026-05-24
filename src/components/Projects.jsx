import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Sinhala Sentiment, Humor & Sarcasm Analysis",
    description: "Transformer-based sentiment analysis using BERT/RoBERTa and SentencePiece tokenization for classification of positive, negative, neutral, sarcastic, and humorous sentiments in Sinhala.",
    tags: ["NLP", "Transformers", "BERT", "Python"]
  },
  {
    title: "Crop Disease Detection System",
    description: "CNN-based deep learning system for disease detection across six Sri Lankan crops, integrated into a fully functional web application.",
    tags: ["Deep Learning", "CNN", "Web App", "Keras"]
  },
  {
    title: "Train Ticketing System",
    description: "Flask web application integrating SQLAlchemy and MySQL for seamless authentication and train booking management.",
    tags: ["Flask", "SQLAlchemy", "MySQL", "Web Dev"]
  },
  {
    title: "Social Media Network Resilience Analysis",
    description: "Dissertation focusing on synthetic bridge nodes and network structures to analyze and improve social media network resilience.",
    tags: ["Network Analysis", "Research", "Data Science"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Research & Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-surface p-8 rounded-3xl shadow-soft border border-gray-50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
              
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-primary leading-tight w-5/6">
                  {project.title}
                </h3>
                <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowUpRight size={18} />
                </a>
              </div>
              
              <p className="text-secondary text-sm leading-relaxed mb-8 h-20">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 bg-background text-xs font-medium text-secondary rounded-full"
                  >
                    {tag}
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

export default Projects;
