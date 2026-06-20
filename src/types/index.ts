import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "AI";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  year: string;
  featured?: boolean;
  thumbnail: string;
  cover: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  architecture: string;
  architectureLayers: { name: string; items: string[] }[];
  screenshots: ProjectScreenshot[];
  challenges: { title: string; description: string }[];
  lessons: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  image: string;
  skills: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  description: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  detail: string;
}

export interface ResumeData {
  summary: string;
  education: EducationItem[];
  experience: TimelineItem[];
  skillsSummary: { group: string; items: string[] }[];
  pdfUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
