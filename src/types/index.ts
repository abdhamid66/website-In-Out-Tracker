export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface AppScreenshot {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
