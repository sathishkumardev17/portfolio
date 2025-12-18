'use client';

import React, { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { useScrollPosition } from '@/utils/hooks';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScrollPosition();
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 50;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Sathish-Kumar-CV.pdf';
    link.download = 'Sathish-Kumar-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-200/95 backdrop-blur-xl shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: isScrolled ? '0 10px 40px -10px rgba(212, 252, 121, 0.15)' : 'none',
      }}
    >
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo.png" 
              alt="SK Logo" 
              className="w-[75px] h-[75px] object-contain"
            />
            <span className="text-white font-bold text-2xl">Sathish Kumar</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <motion.button
              onClick={downloadCV}
              className="bg-primary text-dark-300 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-primary-dark transition-colors duration-200 cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 252, 121, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-dark-200/95 backdrop-blur-xl border-t border-primary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-6 flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left py-2 transition-colors duration-200 ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                onClick={downloadCV}
                className="bg-primary text-dark-300 px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 mt-4 cursor-pointer"
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default memo(Header);

