export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'genai' | 'fullstack' | 'agent' | 'web';
  categoryLabel: string;
  summary: string;
  description: string;
  architecture: string[];
  features: string[];
  techStack: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  accentColor?: string;
  featured: boolean;
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details: string[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  duration: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}
