'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Sparkles, Layout } from 'lucide-react';
import { scaleIn } from '@/utils/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
  delay?: number;
}

const iconMap: { [key: string]: any } = {
  Palette,
  Sparkles,
  Layout,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon,
  highlighted = false,
  delay = 0
}) => {
  const Icon = iconMap[icon] || Palette;

  return (
    <motion.div
      className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 group cursor-pointer ${
        highlighted 
          ? 'bg-gradient-to-br from-primary/10 to-primary-dark/5 border-2 border-primary/30' 
          : 'bg-white/5 border border-white/10 hover:border-primary/30'
      }`}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {/* Icon */}
      <motion.div 
        className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
          highlighted ? 'bg-primary/20' : 'bg-white/10'
        }`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={32} className={highlighted ? 'text-primary' : 'text-white'} />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Arrow Link */}
      <motion.div 
        className="flex items-center space-x-2 text-primary group-hover:space-x-4 transition-all duration-300"
        whileHover={{ x: 5 }}
      >
        <span className="font-semibold">Learn More</span>
        <ArrowRight size={20} />
      </motion.div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default memo(ServiceCard);



