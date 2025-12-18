'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import BlogCard from '@/components/BlogCard/BlogCard';
import { blogPosts } from '@/data/blog';
import { staggerContainer } from '@/utils/animations';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="relative py-20 md:py-32 bg-dark-300 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Latest News" 
          subtitle="Stay updated with the latest trends, tips, and insights from the world of design and technology."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
              image={post.image}
              readTime={post.readTime}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Blog);



