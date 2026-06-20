"use client";

import * as React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

type Filter = "All" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = React.useState<Filter>("All");

  const filtered = React.useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work, written up as case studies"
        description="A few things I'm proud of, each with the problem, the approach, the architecture, and what I learned. Filter by category or open one for the full story."
      />

      <LayoutGroup>
        <div className="mt-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-bg" : "text-muted hover:text-fg",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-fg"
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
