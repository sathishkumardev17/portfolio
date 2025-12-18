export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  technologies?: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    period: '2017',
    role: 'Java Developer (Intern)',
    company: 'Apptivo',
    description: 'Started as a Java developer & worked with AngularJS 1.6. Fixed bugs, troubleshooted and resolved problems. Worked on frontend of CRM (Customer Relationship Management) with authorable contents.',
    technologies: ['Java', 'AngularJS 1.6', 'CRM'],
  },
  {
    id: 'exp-2',
    period: '2018 - 2021',
    role: 'Software Engineer',
    company: 'Wizroots Technologies',
    description: 'Designed, developed, tested, and deployed web applications with clean, scalable code. Developed efficient code structures and optimized application functionality. Researched and recommended software solutions aligned with emerging technologies.',
    technologies: ['React', 'Redux', 'WordPress', 'Handlebars', 'SASS'],
  },
  {
    id: 'exp-3',
    period: '2018 - 2021',
    role: 'UI Developer (Vendor)',
    company: 'Adobe India Private Limited',
    description: 'Integrated HTML and designs with Adobe Experience Manager (AEM) to deliver responsive web applications. Coordinated with designers and developers to implement web projects efficiently. Worked with clients like Humana, Ernst & Young, Unilever, Rite-Aid.',
    technologies: ['AEM', 'HandlebarJS', 'GulpJS', 'SASS', 'VueJS', 'Adobe XD'],
  },
  {
    id: 'exp-4',
    period: '2021 - Present',
    role: 'Senior Software Engineer',
    company: 'Walmart Global Tech',
    description: 'Learning GenAI-powered chatbot development with LLM integration and MCP tools. Building enterprise-scale web applications with focus on performance. Implemented Cypress-based UI automation framework, boosting test reliability.',
    technologies: ['React 18', 'Redux Toolkit', 'TypeScript', 'Node.js', 'FastAPI', 'GenAI', 'LLMs', 'Cypress'],
  },
];

