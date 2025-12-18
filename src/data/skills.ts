export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '⚛️',
    color: 'from-primary to-green-400',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Redux',
      'Material UI',
      'Webpack',
      'SonarQube',
      'Responsive Web Design',
      'Jest',
      'GraphQL',
    ],
  },
  {
    id: 'frameworks',
    title: 'JS Frameworks & Library',
    icon: '📚',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      'Angular 2+',
      'React Native',
      'Flask',
      'VueJS',
      'Next.js',
      'Handlebars',
      'Ionic 3',
      'ElectronJS',
      'Flutter',
      'Cypress',
    ],
  },
  {
    id: 'genai',
    title: 'Gen AI & Chatbot',
    icon: '🤖',
    color: 'from-accent-purple to-purple-400',
    skills: [
      'LLMs (Large Language Models)',
      'MCP Server & Tools',
      'LangChain & LangGraph',
      'Python for AI integration',
      'WebSocket & Stream handling',
      'Vector Databases (Milvus)',
      'Agentic AI design',
      'OpenAI API / GPT Models',
      'RAG (Retrieval-Augmented Generation)',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    color: 'from-accent-blue to-blue-400',
    skills: [
      'NodeJS (Basics)',
      'MongoDB',
      'MySQL',
      'Java',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Software',
    icon: '🎨',
    color: 'from-pink-500 to-rose-400',
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe XD',
      'Adobe Premiere Pro',
      'Figma',
    ],
  },
  {
    id: 'devops',
    title: 'Deployment & DevOps',
    icon: '🚀',
    color: 'from-orange-500 to-red-400',
    skills: [
      'CI/CD Pipelines',
      'Kubernetes',
      'OpenLog',
      'WCNP',
      'Adobe Analytics',
      'Release Management',
    ],
  },
];
