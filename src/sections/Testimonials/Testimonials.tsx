'use client';

import React, { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { testimonialsData } from '@/data/testimonials';
import { fadeIn } from '@/utils/animations';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="relative py-20 md:py-32 bg-dark-300 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle 
          title="What Clients Say" 
          subtitle="Don't just take my word for it. Here's what my clients have to say about working with me."
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Quote Icon */}
              <motion.div
                className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={32} className="text-primary" />
              </motion.div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-xl leading-relaxed mb-8">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent-blue overflow-hidden flex items-center justify-center">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-400">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark-300 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Client Avatars */}
          <motion.div
            className="flex justify-center items-center space-x-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent-purple overflow-hidden flex items-center justify-center transition-all duration-300 ${
                  index === currentIndex ? 'ring-4 ring-primary scale-110' : 'opacity-50 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);

