import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  highlighted?: boolean;
}

export const servicesData: Service[] = [
  {
    id: 'frontend-development',
    title: 'Front-End Development',
    description: 'Building high-performance, scalable, and responsive web applications using modern frameworks and best practices.',
    icon: 'Layout',
    features: [
      'React & Redux Development',
      'TypeScript Integration',
      'Responsive Web Design',
      'Performance Optimization',
    ],
  },
  {
    id: 'genai-integration',
    title: 'Gen AI & Chatbot Development',
    description: 'Developing GenAI-powered chatbots with LLM integration, enabling autonomous workflows, natural language queries, and AI-driven insights.',
    icon: 'Sparkles',
    features: [
      'LLM Integration',
      'MCP Tools & Server',
      'LangChain & LangGraph',
      'RAG Implementation',
    ],
    highlighted: true,
  },
  {
    id: 'ui-automation',
    title: 'UI Automation & Testing',
    description: 'Implementing robust automation frameworks with Cypress to ensure code quality, reliability, and faster release cycles.',
    icon: 'Palette',
    features: [
      'Cypress Automation',
      'Jest Unit Testing',
      'CI/CD Integration',
      'Quality Assurance',
    ],
  },
];

