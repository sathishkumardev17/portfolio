'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { slideInLeft, slideInRight } from '@/utils/animations';

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies?: string[];
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  period,
  role,
  company,
  description,
  technologies,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-between mb-12 md:mb-16">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent hidden md:block -translate-x-1/2" />

      {/* Content */}
      <motion.div
        className={`relative w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
        variants={isEven ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
          {/* Period Badge */}
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
            <span className="text-primary font-semibold text-sm">{period}</span>
          </div>

          {/* Role & Company */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {role}
          </h3>
          <p className="text-gray-400 font-medium mb-4">{company}</p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-4">{description}</p>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 hidden md:block">
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-4 h-4 bg-primary rounded-full shadow-neon-green" />
          <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
        </motion.div>
      </div>
    </div>
  );
};

export default memo(ExperienceCard);

