export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Skills', href: '#services' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'work', label: 'Work', href: '#work' },
];

