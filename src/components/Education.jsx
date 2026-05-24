import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const educationData = [
  {
    title: "BSc in Applied Sciences",
    institution: "Rajarata University of Sri Lanka",
    period: "Expected Completion: October 2026",
    details: "Specialization: Statistics, Mathematics, Computer Science",
    icon: <GraduationCap size={24} className="text-white" />
  },
  {
    title: "G.C.E Advanced Level",
    institution: "Richmond College Galle",
    period: "2010 – 2020",
    details: "Physical Science Stream • Results: CCC",
    icon: <BookOpen size={24} className="text-white" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Education
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:pl-0">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-0 md:flex md:items-center md:justify-between w-full"
            >
              <div className="hidden md:block md:w-5/12 text-right pr-8 text-sm text-secondary font-medium">
                {item.period}
              </div>

              <div className="absolute left-[-16px] md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-soft z-10 border-4 border-background">
                {item.icon}
              </div>

              <div className="md:w-5/12 md:pl-8">
                <div className="bg-surface p-6 rounded-2xl shadow-soft border border-gray-50">
                  <span className="md:hidden text-xs font-semibold text-accent mb-2 block uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-md text-secondary font-medium mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
