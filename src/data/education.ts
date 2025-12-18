export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'B.E in Computer Science Engineering',
    institution: 'Karpagam College of Engineering',
    location: 'Coimbatore, Tamil Nadu',
    period: '2014 - 2017',
    grade: 'CGPA: 8.4',
  },
  {
    id: 'edu-2',
    degree: 'Diploma in Computer Science Engineering',
    institution: 'NPR Group of College',
    location: 'Dindigul, Tamil Nadu',
    period: '2011 - 2014',
    grade: 'CGPA: 9.6',
  },
];



