'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Download, Play, ChevronDown } from 'lucide-react';
import { heroData } from '@/data/hero';
import { fadeIn, slideUp, slideInLeft, slideInRight } from '@/utils/animations';
import { withBasePath } from '@/utils/paths';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = withBasePath('/Sathish-Kumar-CV.pdf');
    link.download = 'Sathish-Kumar-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-200">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-400 text-lg mb-2 block">{heroData.greeting}</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              {heroData.name}
            </motion.h1>

            <motion.div
              className="flex items-center space-x-3 mb-6"
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-xl text-gray-300">{heroData.title}</span>
            </motion.div>

            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={slideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={downloadCV}
                className="bg-primary text-dark-300 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 shadow-neon-green hover:bg-primary-dark transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>{heroData.cta.primary}</span>
              </motion.button>

              <motion.button
                onClick={() => {
                  const workSection = document.getElementById('work');
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} />
                <span>{heroData.cta.secondary}</span>
              </motion.button>
            </motion.div>

          </div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[550px]">
              {/* Main Profile Circle */}
              <div className="relative w-[400px] h-[400px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent-blue" />
                <div className="absolute inset-2 rounded-full bg-dark-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={withBasePath('/profile.png')} 
                    alt="Sathish Profile" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                
              </div>

              {/* Experience Badge - Top Left */}
              <motion.div
                className="absolute top-8 -left-8 md:top-12 md:-left-12 lg:top-8 lg:-left-20 bg-dark-200/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 md:p-6 lg:p-8 shadow-card"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-1">{heroData.stats.yearsExperience}</div>
                <div className="text-xs md:text-sm lg:text-base text-gray-400">{heroData.stats.label}</div>
              </motion.div>

              {/* Code Icon - Left Middle */}
              <motion.div
                className="absolute bottom-8 left-[14px] md:bottom-10 md:left-[6px] lg:bottom-12 lg:left-[-2px] bg-dark-200/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-3 md:p-4 shadow-card"
                animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </motion.div>

              {/* Frontend Developer Illustration */}
              {/* <motion.div
                className="absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-20 bg-dark-200/90 backdrop-blur-sm border border-accent-blue/30 rounded-2xl p-6 lg:p-8 shadow-card"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.75 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&q=80" 
                  alt="Frontend Developer" 
                  className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
                />
              </motion.div> */}

              {/* Database Icon - Top Right */}
              <motion.div
                className="absolute top-8 -right-4 md:top-12 md:-right-6 lg:top-16 lg:-right-8 bg-dark-200/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-3 md:p-4 shadow-card"
                animate={{ y: [5, -5, 5], rotate: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </motion.div>

              {/* Modern Web Technologies Badge */}
              <motion.div
                className="absolute bottom-12 right-[-2px] md:bottom-16 md:right-[-18px] lg:bottom-20 lg:right-[-34px] bg-dark-200/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-4 md:p-6 lg:p-8 shadow-card"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">{heroData.stats.projectsCompleted}</div>
                <div className="text-xs md:text-sm lg:text-base text-gray-400">{heroData.stats.projectsLabel}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default memo(Hero);

