"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 backdrop-blur transition-colors hover:border-fg/15"
    >
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.18),transparent)]" />
      </div>

      <Link href={`/projects/${project.slug}`} className="relative block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/0 to-bg/0" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge className="bg-bg/70">{project.category}</Badge>
            {project.featured && (
              <Badge className="border-accent/30 bg-accent/15 text-accent">
                Featured
              </Badge>
            )}
          </div>
          <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-bg/70 text-fg opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </Link>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-lg font-semibold text-fg transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </Link>
          <span className="font-mono text-xs text-faint">{project.year}</span>
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md bg-fg/[0.05] px-2 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-md bg-fg/[0.05] px-2 py-1 font-mono text-[11px] text-faint">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-medium text-fg transition-colors hover:text-accent"
          >
            Case study
          </Link>
          <div className="ml-auto flex items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
