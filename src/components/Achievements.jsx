import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    title: "Junior Winner",
    event: "EDEX Sithuwam All Island Art Competition",
    year: "2012",
    icon: <Trophy className="text-yellow-500" size={24} />
  },
  {
    title: "1st Place — Carrom",
    event: "Freshers’ Tournament, Rajarata University",
    year: "University",
    icon: <Medal className="text-yellow-500" size={24} />
  },
  {
    title: "2nd Place — 4x400 Relay",
    event: "Freshers’ Sports Meet",
    year: "University",
    icon: <Medal className="text-gray-400" size={24} />
  },
  {
    title: "2nd Runners-Up – Inter-House Hockey U-13",
    event: "School Colors",
    year: "School",
    icon: <Award className="text-amber-600" size={24} />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Extracurricular
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Achievements & Awards
          </h2>
        </motion.div>

        <div className="space-y-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center p-6 bg-background rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-sm mr-6 shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-secondary">{item.event}</p>
              </div>
              <div className="text-sm font-semibold text-gray-400 ml-4">
                {item.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
