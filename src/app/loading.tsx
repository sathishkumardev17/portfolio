'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark-200 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-dark-300 font-bold text-2xl">SK</span>
        </motion.div>
        <motion.h2
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio...
        </motion.h2>
        <div className="loading-dots text-primary">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

