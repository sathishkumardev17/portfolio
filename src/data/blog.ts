export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Building AI-Powered Chatbots with LLMs',
    excerpt: 'Discover how to integrate Large Language Models with MCP tools to create autonomous workflows and natural language interfaces in modern web applications.',
    date: 'Jan 15, 2024',
    category: 'Gen AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
    author: 'Sathish Kumar M',
    readTime: '8 min read',
  },
  {
    id: 'post-2',
    title: 'Optimizing React Applications for Enterprise Scale',
    excerpt: 'Best practices for building high-performance React applications that scale to handle millions of users with Redux Toolkit and TypeScript.',
    date: 'Dec 20, 2023',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop&q=80',
    author: 'Sathish Kumar M',
    readTime: '10 min read',
  },
  {
    id: 'post-3',
    title: 'Cypress Automation: From Zero to Hero',
    excerpt: 'Learn how to implement a robust UI automation framework using Cypress to boost test reliability and accelerate release cycles.',
    date: 'Nov 10, 2023',
    category: 'Testing',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop&q=80',
    author: 'Sathish Kumar M',
    readTime: '12 min read',
  },
];

