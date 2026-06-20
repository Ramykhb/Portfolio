import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { StatCard } from "@/components/StatCard";
import { stats } from "@/data/skills";
import { Compass, Cpu, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Full-Stack Engineering",
    body: "I build end-to-end applications across web and mobile, from intuitive user interfaces to scalable backend services, databases, and cloud-ready architectures. I enjoy turning ideas into reliable products that people use every day.",
  },
  {
    icon: Cpu,
    title: "Machine Learning & Deep Learning",
    body: "Beyond software engineering, I'm actively expanding my expertise in Machine Learning and Deep Learning. I'm particularly interested in intelligent systems, data-driven applications, model deployment, and bringing AI capabilities into real-world products.",
  },
  {
    icon: Sparkles,
    title: "Building for Impact",
    body: "I value clean architecture, maintainable code, and thoughtful user experiences. Whether developing a mobile app, designing APIs, or integrating AI solutions, I focus on creating software that is scalable, practical, and enjoyable to use.",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Full-Stack Engineer building modern software and AI-driven solutions"
        description="I'm Ramy, a Full-Stack Engineer passionate about creating scalable web and mobile applications. Alongside software engineering, I'm deepening my expertise in Machine Learning and Deep Learning with the goal of building intelligent, production-ready systems that combine great user experiences with powerful backend capabilities."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface/40 p-7 backdrop-blur transition-colors hover:border-fg/15">
                <div className="mb-5 inline-flex rounded-xl border border-border bg-bg/50 p-2.5 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <StatCard stat={stat} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
