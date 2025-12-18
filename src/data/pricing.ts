export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  tag?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'consultation',
    name: 'Consultation',
    price: 50,
    period: 'hour',
    description: 'Perfect for quick consultations and code reviews',
    features: [
      'Technical consultation',
      'Code review & optimization',
      'Architecture planning',
      'Best practices guidance',
      'Technology recommendations',
    ],
  },
  {
    id: 'project-based',
    name: 'Project Based',
    price: 2500,
    period: 'project',
    description: 'Ideal for complete web applications',
    features: [
      'Full-stack web application',
      'React/TypeScript development',
      'Responsive design',
      'API integration',
      'Testing & deployment',
      '3 months maintenance',
    ],
    highlighted: true,
    tag: 'Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solution',
    price: 5000,
    period: 'project',
    description: 'For large-scale enterprise applications',
    features: [
      'Enterprise-grade application',
      'GenAI/LLM integration',
      'Microservices architecture',
      'CI/CD pipeline setup',
      'Performance optimization',
      'Security best practices',
      '6 months support',
    ],
  },
];
