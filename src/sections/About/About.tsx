'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { slideUp, fadeIn, staggerContainer, staggerItem } from '@/utils/animations';
import { getYearsOfExperience, getYearsOfExperienceNumber } from '@/utils/experience';

const About: React.FC = () => {
  const advantages = [
    { title: 'React Expert', description: `${getYearsOfExperienceNumber()}+ years building React apps` },
    { title: 'GenAI Integration', description: 'LLM & chatbot development' },
    { title: 'Performance', description: 'Optimized & scalable code' },
    { title: 'Full-Stack', description: 'React, Node.js & FastAPI expertise' },
    { title: 'Quality Driven', description: 'Cypress automation expert' },
    { title: 'Responsive', description: 'Mobile-first design' },
  ];


  return (
    <section id="about" className="relative py-20 md:py-32 bg-dark-300 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle 
          title="My Advantage" 
          subtitle="Why choose me for your next project? Here's what makes me stand out."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {advantage.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/20 rounded-3xl p-8 md:p-12"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {getYearsOfExperience()}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                25+
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">Projects Delivered</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                3
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">Major Companies</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                2
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">Awards Received</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default memo(About);

