'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { skillsData } from '@/data/skills';
import { staggerContainer, staggerItem } from '@/utils/animations';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-32 bg-dark-200 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise across frontend, backend, AI, and modern development tools."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative group"
              variants={staggerItem}
            >
              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mt-3`} />
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:bg-white/10 hover:border-primary/30 hover:text-primary transition-all duration-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.02 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services);

