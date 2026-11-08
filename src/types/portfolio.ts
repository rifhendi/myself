export type ProjectCategory = 
  | "All" 
  | "IT Support & Infrastructure" 
  | "Software Development";

export type ProjectStatus = "Completed" | "In Active Development" | "Production" | "Live";

export type MockupType = 
  | "assetflow" 
  | "werecap" 
  | "mainpro" 
  | "livestock360" 
  | "virelist" 
  | "absensi" 
  | "portfolio";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "IT Support & Infrastructure" | "Software Development";
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  status: ProjectStatus;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  date: string;
  mockupType: MockupType;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  division?: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  techEnvironment: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: "Core" | "Advanced" | "Familiar";
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty?: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  tagline: string;
  roles: string[];
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  status: {
    available: boolean;
    text: string;
  };
  education: EducationItem;
}
