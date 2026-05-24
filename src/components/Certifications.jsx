import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Continuous Learning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Licenses & Certifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-soft border border-gray-50 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-surface flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
            <Award size={40} className="text-accent" />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Diploma in ICT & Computing (Level 4)
            </h3>
            <p className="text-lg text-secondary mb-4">
              IDM Achievers International Campus
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-success" />
                Grade: Distinction
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-success" />
                Issued: 2022
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
