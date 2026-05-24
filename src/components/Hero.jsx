import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "BSc Applied Science Undergraduate";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Subtle Gradient Background Particles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium tracking-wide uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight"
        >
          Navindu Lakshan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-8 mb-6"
        >
          <h2 className="text-xl md:text-2xl text-secondary font-light">
            {text}
            <span
              className={`inline-block w-1 h-6 ml-1 bg-accent ${
                isTyping ? 'animate-pulse' : 'hidden'
              }`}
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-secondary max-w-2xl mx-auto mb-10 text-lg"
        >
          Statistics · Mathematics · Computer Science
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-soft"
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3 bg-surface text-primary rounded-full hover:bg-gray-50 transition-all shadow-soft border border-gray-100"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
