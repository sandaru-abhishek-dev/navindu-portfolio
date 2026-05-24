import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-surface">
              <img
                src="/profile.jpeg"
                alt="Navindu Lakshan"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle green glow ring */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-accent/20 pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight">
              Versatile and Detail-Oriented
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              I am an Applied Sciences undergraduate specializing in Statistics, Mathematics, and Computer Science. As an award-winning creative individual and All-Island Art Competition Winner, I strive to combine analytical thinking with visual creativity.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My experience spans full-stack web development and machine learning, including creating deep learning solutions for crop disease detection and Transformer-based sentiment analysis for Sinhala NLP. I am passionate about solving complex problems elegantly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
