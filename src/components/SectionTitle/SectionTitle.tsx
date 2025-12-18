'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { slideUp, fadeIn } from '@/utils/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default memo(SectionTitle);



