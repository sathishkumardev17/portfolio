'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { scaleIn } from '@/utils/animations';

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  tag?: string;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  tag,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
        highlighted
          ? 'bg-gradient-to-br from-primary/10 to-primary-dark/5 border-2 border-primary scale-105'
          : 'bg-white/5 border border-white/10 hover:border-primary/30'
      }`}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
    >
      {/* Tag */}
      {tag && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-dark-300 px-4 py-1 rounded-full text-sm font-semibold">
            {tag}
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-gray-400 mb-6">{description}</p>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-white">${price}</span>
          <span className="text-gray-400 ml-2">/ {period}</span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + index * 0.1 }}
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
              <Check size={14} className="text-primary" />
            </div>
            <span className="text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        className={`w-full py-4 rounded-full font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
          highlighted
            ? 'bg-primary text-dark-300 hover:bg-primary-dark shadow-neon-green'
            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Get Started</span>
        <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  );
};

export default memo(PricingCard);



