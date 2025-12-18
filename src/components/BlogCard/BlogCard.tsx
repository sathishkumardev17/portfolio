'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { scaleIn } from '@/utils/animations';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  delay?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  category,
  image,
  readTime,
  delay = 0,
}) => {
  return (
    <motion.article
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent-purple/10 to-accent-blue/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-dark-300 px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>

        {/* Read More Link */}
        <motion.div
          className="flex items-center space-x-2 text-primary font-semibold group-hover:space-x-4 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          <span>Read More</span>
          <ArrowRight size={18} />
        </motion.div>
      </div>
    </motion.article>
  );
};

export default memo(BlogCard);

