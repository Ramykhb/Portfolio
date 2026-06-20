"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Target,
  Lightbulb,
  Layers3,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import type { Project } from "@/types";

export function ProjectDetail({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <article className="pb-24">
      <header className="relative overflow-hidden px-6 pt-32 pb-12">
        <div className="mx-auto w-full max-w-content">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Reveal>
              <Badge className="border-accent/30 bg-accent/15 text-accent">
                {project.category}
              </Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="font-mono text-xs text-faint">
                {project.year}
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-gradient sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-2xl text-pretty text-lg text-muted">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild variant="accent">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                    Source code
                  </a>
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto w-full max-w-content px-6">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              sizes="(max-width:1120px) 100vw, 1120px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-content gap-12 px-6 lg:grid-cols-[1fr_280px] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <Block title="Overview">
            <p>{project.overview}</p>
          </Block>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card icon={Target} title="The problem" tone="amber">
              {project.problem}
            </Card>
            <Card icon={Lightbulb} title="The solution" tone="accent">
              {project.solution}
            </Card>
          </div>

          <section>
            <SubHeading icon={CheckCircle2}>Features</SubHeading>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              {project.features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur"
                >
                  <h4 className="font-medium text-fg">{f.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section>
            <SubHeading icon={Layers3}>Architecture</SubHeading>
            <p className="mt-4 leading-relaxed text-muted">
              {project.architecture}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {project.architectureLayers.map((layer, i) => (
                <Reveal key={layer.name} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur">
                    <div className="font-mono text-xs uppercase tracking-wider text-accent">
                      {layer.name}
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {layer.items.map((item) => (
                        <li key={item} className="text-sm text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {project.screenshots.length > 0 && (
            <section>
              <SubHeading icon={Layers3}>Screenshots</SubHeading>
              <div className="mt-6 space-y-5">
                {project.screenshots.map((shot, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <figure className="overflow-hidden rounded-2xl border border-border">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          sizes="(max-width:1120px) 100vw, 820px"
                          className="object-cover"
                        />
                      </div>
                      {shot.caption && (
                        <figcaption className="border-t border-border bg-surface/40 px-4 py-2.5 text-xs text-faint">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          <section>
            <SubHeading icon={AlertTriangle}>Challenges</SubHeading>
            <div className="mt-6 space-y-4">
              {project.challenges.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur">
                    <h4 className="font-medium text-fg">{c.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {c.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section>
            <SubHeading icon={GraduationCap}>Lessons learned</SubHeading>
            <ul className="mt-6 space-y-3">
              {project.lessons.map((lesson, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <li className="flex gap-3 text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="leading-relaxed">{lesson}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur">
            <h3 className="text-sm font-medium text-fg">Tech stack</h3>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-fg/[0.05] px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-border pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> Live demo
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Repository
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </aside>
      </div>

      <div className="mx-auto mt-20 w-full max-w-content px-6">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-surface/40 p-8 backdrop-blur transition-colors hover:border-fg/15"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-faint">
              Next project
            </div>
            <div className="mt-1 text-2xl font-semibold text-fg transition-colors group-hover:text-accent">
              {next.title}
            </div>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:translate-x-1 group-hover:border-accent group-hover:text-accent">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </div>
    </article>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-fg">
          {title}
        </h2>
        <div className="mt-4 text-lg leading-relaxed text-muted">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

function SubHeading({
  icon: Icon,
  children,
}: {
  icon: typeof Target;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <h2 className="flex items-center gap-2.5 text-2xl font-semibold tracking-tight text-fg">
        <Icon className="h-6 w-6 text-accent" />
        {children}
      </h2>
    </Reveal>
  );
}

function Card({
  icon: Icon,
  title,
  tone,
  children,
}: {
  icon: typeof Target;
  title: string;
  tone: "amber" | "accent";
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="h-full rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur">
        <div
          className={
            "mb-4 inline-flex rounded-xl border border-border bg-bg/50 p-2.5 " +
            (tone === "amber" ? "text-signal" : "text-accent")
          }
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-fg">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{children}</p>
      </div>
    </Reveal>
  );
}
