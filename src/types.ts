export type ActiveTab = 'home' | 'about' | 'programmes' | 'academia' | 'gallery' | 'faq' | 'enroll';

export interface Course {
  name: string;
  duration: string;
  fee: string;
  eligibility: string;
  description: string;
  syllabus: string[];
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  eligibilitySummary: string;
  courses: Course[];
  faqs?: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}
