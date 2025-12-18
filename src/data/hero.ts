import { getYearsOfExperience, getYearsOfExperienceNumber } from '@/utils/experience';

export const heroData = {
  greeting: 'Hello,',
  name: 'I Am Sathish',
  title: 'Senior Front-End Developer',
  description: `Front-End Developer with ${getYearsOfExperienceNumber()}+ years of experience building high-performance, scalable, and data-driven web applications. Currently exploring AI technologies, including generative AI, LLM integration, and automation.`,
  stats: {
    yearsExperience: getYearsOfExperience(),
    label: 'Years Experience',
    projectsCompleted: 'Enterprise',
    projectsLabel: 'Scale',
  },
  cta: {
    primary: 'Download CV',
    secondary: 'View Projects',
  },
};

