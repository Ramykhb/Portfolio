import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import type { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Ramy Khachab",
  title: "Full-Stack Engineer | Machine Learning & Deep Learning Enthusiast",
  roles: [
    "Full Stack Engineer",
    "Machine Learning & Deep Learning Engineer",
    "Backend Engineer",
    "Product-Minded Developer",
  ],
  email: "ramykhb18@gmail.com",
  location: "Beirut, Lebanon",
  url: "https://ramykhachab.dev",
  description:
    "Full-Stack Engineer building scalable end-to-end applications across web and mobile, with a growing focus on Machine Learning and Deep Learning to design intelligent, data-driven systems.",
  resumeUrl: "/RamyKhachab-Resume.pdf",
  ogImage: "/og.jpeg",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Ramykhb", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ramykhachab",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ramykhachab",
    icon: Instagram,
  },
  { label: "Email", href: "mailto:ramykhb18@gmail.com", icon: Mail },
];
