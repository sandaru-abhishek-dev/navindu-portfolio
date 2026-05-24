import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Contact Me
          </h2>
        </motion.div>

        <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-soft border border-gray-50 flex flex-col md:flex-row gap-12">
          
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Phone</p>
                <p className="text-lg font-medium text-primary">+94 763852991</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email</p>
                <a href="mailto:navindusanjithalakshan@gmail.com" className="text-lg font-medium text-primary hover:text-accent transition-colors">
                  navindusanjithalakshan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="text-lg font-medium text-primary">
                  Muddaragewatta, Liyanagoda,<br />
                  Habaraduwa
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-background rounded-2xl p-8 text-center border border-gray-100">
              <h4 className="text-xl font-semibold text-primary mb-4">Let's Connect</h4>
              <p className="text-secondary mb-8 text-sm">
                I'm always open to discussing research collaborations, web development projects, or creative opportunities.
              </p>
              <a
                href="mailto:navindusanjithalakshan@gmail.com"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-soft"
              >
                <Send size={18} />
                <span>Send a Message</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
