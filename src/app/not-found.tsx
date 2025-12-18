'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-200 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          className="text-9xl font-bold gradient-text mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Page Not Found
        </motion.h1>
        
        <motion.p
          className="text-gray-400 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/">
            <motion.button
              className="bg-primary text-dark-300 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-neon-green"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={20} />
              <span>Go Home</span>
            </motion.button>
          </Link>
          
          <motion.button
            onClick={() => window.history.back()}
            className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

