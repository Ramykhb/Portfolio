import type { ResumeData } from "@/types";

export const resume: ResumeData = {
  summary:
    "Full Stack Engineer with a track record of shipping reliable, well-architected products end to end. Comfortable owning a feature from data model to deployed UI, and equally happy untangling a gnarly performance bug or designing a clean API surface.",
  education: [
    {
      period: "2023 — Present",
      degree:
        "B.E. in Computer and Communications Engineering (Software Engineering)",
      school: "Antonine University",
      detail:
        "Software engineering track with focus on systems design, web development, and networked applications.",
    },
  ],
  experience: [
    {
      period: "2026 — 2026",
      role: "Full Stack Engineer Intern",
      org: "Ghaia.ai",
      description: "lorem ipsum",
    },
  ],
  skillsSummary: [
    {
      group: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      group: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      group: "Backend",
      items: ["Node.js", "NestJS", "Express", "REST APIs"],
    },
    {
      group: "Data & Infrastructure",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Docker", "CI/CD"],
    },
  ],
  pdfUrl: "/RamyKhachab-Resume.pdf",
};
