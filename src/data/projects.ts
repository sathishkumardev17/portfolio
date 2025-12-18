export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  company?: string;
}

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'AI Chatbot & Agentic AI Platform',
    category: 'GenAI & Enterprise',
    description: 'Designed and developed AI-powered chatbot interfaces (Radar UI, LMD Insights) enabling autonomous workflows, real-time analytics, and natural language interactions across Walmart delivery systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
    tags: ['React 18', 'GenAI', 'LLMs', 'MCP Tools', 'TypeScript'],
    company: 'walmart',
  },
  {
    id: 'project-2',
    title: 'Dispatcher UI Automation',
    category: 'Testing & QA',
    description: 'Built Cypress-based automation framework improving regression coverage, release efficiency, and product reliability across Walmart logistics operations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    tags: ['Cypress', 'Automation', 'CI/CD', 'Testing'],
    company: 'walmart',
  },
  {
    id: 'project-3',
    title: 'Fixit UI - Operations Dashboard',
    category: 'Enterprise Web App',
    description: 'Developed React-based operational dashboard for managing LMD issues and tickets with BigQuery analytics, Azure Blob Storage, GraphQL data retrieval, and RMA/SSO authentication.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    tags: ['React', 'Redux', 'GraphQL', 'BigQuery', 'Azure'],
    company: 'walmart',
  },
  {
    id: 'project-4',
    title: 'Driver UI & Fleet Management',
    category: 'Real-time Dashboard',
    description: 'Built driver management dashboard using React 18, Redux Toolkit, and Express, featuring real-time data visualization, Excel export, and Living Design integration.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    tags: ['React 18', 'Redux Toolkit', 'Node.js', 'Real-time'],
    company: 'walmart',
  },
  {
    id: 'project-5',
    title: 'Dispatcher UI & Fleet UI',
    category: 'Logistics Platform',
    description: 'Developed enterprise-level UI for multi-market logistics operations, featuring real-time tracking, Google Maps integration, and chart visualizations.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&q=80',
    tags: ['React', 'Google Maps', 'Charts', 'Real-time Tracking'],
    company: 'walmart',
  },
  {
    id: 'project-6',
    title: 'Adobe AEM Projects',
    category: 'Enterprise CMS',
    description: 'Worked on multiple enterprise projects including Humana, Ernst & Young, Unilever, Rite-Aid, and Studio Kohler. Built UI components using HandlebarJS integrated with Adobe Experience Manager.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop&q=80',
    tags: ['AEM', 'HandlebarJS', 'SASS', 'GulpJS', 'VueJS'],
    company: 'adobe',
  },
  {
    id: 'project-7',
    title: 'Brand Copywriting Tool',
    category: 'Web Application',
    description: 'Designed layouts in Adobe XD, developed responsive HTML/CSS, and hosted live. A complete tool for brand copywriting management.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=600&fit=crop&q=80',
    tags: ['Adobe XD', 'HTML5', 'CSS3', 'Responsive'],
    link: 'https://github.com/sathishvasi',
    company: 'adobe',
  },
  {
    id: 'project-8',
    title: 'TestMaker - Online Test Platform',
    category: 'Education Platform',
    description: 'Built an online test platform using ReactJS + Redux, delivering instant result computation and responsive design for seamless testing experience.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80',
    tags: ['React', 'Redux', 'Education', 'Real-time'],
    link: 'https://testmaker.in',
    company: 'wizroots',
  },
  {
    id: 'project-9',
    title: 'Movie Hunt',
    category: 'Personal Project',
    description: 'Interactive movie search web app built using ReactJS with responsive design and dynamic API integration. Browse and search movies with ease.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop&q=80',
    tags: ['React', 'API Integration', 'Responsive'],
    link: 'https://sathishvasi.github.io/sathish-moviesv2',
    company: 'personal',
  },
  {
    id: 'project-10',
    title: 'Valeo Health Tracking App',
    category: 'Healthcare',
    description: 'Developed health tracking app UI using ReactJS, Redux, and SASS, ensuring seamless design and performance for tracking wellness metrics.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
    tags: ['React', 'Redux', 'SASS', 'Healthcare'],
    link: 'https://feelvaleo.com',
    company: 'wizroots',
  },
  {
    id: 'project-11',
    title: 'Near.Store - Location Platform',
    category: 'E-commerce',
    description: 'Created mobile view in Handlebars & SASS, integrated Google Tag Manager for user tracking and analytics.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop&q=80',
    tags: ['Handlebars', 'SASS', 'GTM', 'Analytics'],
    link: 'https://near.store',
    company: 'wizroots',
  },
  {
    id: 'project-12',
    title: 'HeyBlue Voice App',
    category: 'Web App',
    description: 'Voice recording web app allowing users to record "Hey Blue" in 10 variations. Built with vanilla JavaScript and Web Audio API.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop&q=80',
    tags: ['JavaScript', 'Web Audio API', 'Voice Recording'],
    link: 'https://sathishvasi.github.io/HeyBlue',
    company: 'personal',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'walmart', label: 'Walmart Global Tech' },
  { id: 'adobe', label: 'Adobe India' },
  { id: 'wizroots', label: 'Wizroots Technologies' },
  { id: 'personal', label: 'Personal Projects' },
];
