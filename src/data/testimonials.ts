export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Team Lead',
    role: 'Engineering Manager',
    company: 'Walmart Global Tech',
    content: 'Sathish\'s expertise in GenAI and front-end development has been instrumental in delivering our AI-powered chatbot platform. His ability to integrate complex LLM workflows with intuitive UI is exceptional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Project Manager',
    role: 'Technical Lead',
    company: 'Adobe India',
    content: 'Working with Sathish on multiple AEM projects was a great experience. His attention to detail and ability to deliver pixel-perfect implementations consistently exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Colleague',
    role: 'Senior Developer',
    company: 'Walmart Global Tech',
    content: 'Sathish\'s Cypress automation framework significantly improved our release efficiency and test coverage. His technical skills and problem-solving abilities are top-notch. A true professional!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
    rating: 5,
  },
];

