'use client';

import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useScrollPosition } from '@/utils/hooks';

const ScrollToTop: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const showButton = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          className="fixed bottom-8 right-8 z-40 bg-primary text-dark-300 p-4 rounded-full shadow-neon-green hover:bg-primary-dark transition-colors duration-200"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default memo(ScrollToTop);



