'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import PricingCard from '@/components/PricingCard/PricingCard';
import { pricingPlans } from '@/data/pricing';
import { staggerContainer } from '@/utils/animations';

const Pricing: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-dark-200 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Pricing Plan" 
          subtitle="Choose the perfect plan for your project. Flexible pricing options to fit your budget and requirements."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              tag={plan.tag}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4">
            Need a custom plan? Let&apos;s discuss your specific requirements.
          </p>
          <motion.button
            className="text-primary font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Pricing);

