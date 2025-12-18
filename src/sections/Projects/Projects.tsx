'use client';

import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projectsData, projectCategories } from '@/data/projects';
import { staggerContainer } from '@/utils/animations';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === 'all' || project.company === activeCategory
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMoreProjects = filteredProjects.length > 3;

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowAll(false);
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <section id="work" className="relative py-20 md:py-32 bg-dark-200 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle 
          title="Recent Work" 
          subtitle="Explore my latest projects and see how I've helped clients achieve their goals through innovative design solutions."
        />

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-dark-300 shadow-neon-green'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={`${activeCategory}-${showAll}`}
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* View All Button - Only show if there are more than 3 projects and not already showing all */}
        {hasMoreProjects && !showAll && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              onClick={handleViewAll}
              className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default memo(Projects);

