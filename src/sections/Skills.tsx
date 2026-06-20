"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit built for the whole stack"
        description="Years of shipping have given me depth across the front end, back end, data, and the infrastructure that ties it together. Here's where I'm strongest."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur transition-colors hover:border-fg/15"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />
              </div>

              <div className="relative flex items-center gap-3">
                <span className="inline-flex rounded-xl border border-border bg-bg/50 p-2.5 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-fg">{cat.title}</h3>
                </div>
              </div>

              <p className="relative mt-3 text-sm text-muted">{cat.blurb}</p>

              <ul className="relative mt-5 space-y-3.5">
                {cat.skills.map((skill, i) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-[13px]">
                      <span className="font-medium text-fg/90">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-faint">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-fg/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                          duration: 1,
                          delay: 0.15 + i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-signal"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
