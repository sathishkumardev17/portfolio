'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';
import { experienceData } from '@/data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 md:py-32 bg-dark-300 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle 
          title="My Work Experience" 
          subtitle="A journey through my professional career, showcasing growth, learning, and achievement in the design industry."
        />

        <div className="mt-16 relative">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              period={experience.period}
              role={experience.role}
              company={experience.company}
              description={experience.description}
              technologies={experience.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);

