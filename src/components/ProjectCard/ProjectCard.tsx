'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { staggerItem } from '@/utils/animations';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  tags,
  link,
  delay = 0,
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer"
      variants={staggerItem}
      whileHover={{ y: -10 }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-dark-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-dark-200/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-primary/90 text-dark-300 px-3 py-1.5 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>

        {/* External Link Icon */}
        {link && (
          <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={18} className="text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-gray-400">+{tags.length - 3} more</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);

