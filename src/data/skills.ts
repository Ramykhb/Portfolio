import { Layers, Server, Database, Cloud, Wrench } from "lucide-react";
import type { SkillCategory, Stat } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layers,
    blurb: "Modern web interfaces focused on performance and usability.",
    skills: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 96 },
      { name: "TypeScript", level: 97 },
      { name: "Tailwind CSS", level: 96 },
      { name: "HTML/CSS", level: 99 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    blurb: "Scalable APIs and server-side applications.",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 95 },
      { name: "Express", level: 97 },
      { name: "Spring Boot", level: 80 },
      { name: "REST APIs", level: 100 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    blurb: "Data modeling, persistence, and ORM tooling.",
    skills: [
      { name: "PostgreSQL", level: 96 },
      { name: "MySQL", level: 97 },
      { name: "MongoDB", level: 94 },
      { name: "Prisma", level: 92 },
      { name: "TypeORM", level: 97 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    blurb: "Deployment, automation, and development workflows.",
    skills: [
      { name: "Docker", level: 93 },
      { name: "Git", level: 97 },
      { name: "GitHub", level: 95 },
      { name: "CI/CD", level: 87 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    id: "tools",
    title: "Languages & Tools",
    icon: Wrench,
    blurb: "Programming languages and supporting tools.",
    skills: [
      { name: "TypeScript", level: 93 },
      { name: "JavaScript", level: 95 },
      { name: "Java", level: 90 },
      { name: "Python", level: 91 },
      { name: "C++", level: 85 },
      { name: "Figma", level: 80 },
    ],
  },
];

export const stats: Stat[] = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "" },
  { label: "Technologies Mastered", value: 25, suffix: "+" },
];
