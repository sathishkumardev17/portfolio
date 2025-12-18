'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Dribbble, Twitter, Github } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import { fadeIn } from '@/utils/animations';
import { getYearsOfExperienceNumber } from '@/utils/experience';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sathish-kumar-m/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/sathishvasi', label: 'Github' },
    { icon: Mail, href: 'mailto:sathishkumar.dev17@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-dark-300 font-bold text-xl">SK</span>
              </div>
              <span className="text-white font-bold text-2xl">Sathish Kumar</span>
            </div>
            <p className="text-gray-400 mb-4">
              Front-End Developer with {getYearsOfExperienceNumber()}+ years building high-performance web applications and exploring GenAI technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-200">Front-End Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-200">GenAI Integration</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-200">UI Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-200">Web Applications</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>sathishkumar.dev17@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+91 9688183779</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Sathish Kumar M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

