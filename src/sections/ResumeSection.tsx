import { Download, GraduationCap, Briefcase, FileText } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { resume } from "@/data/resume";
import { certifications } from "@/data/certifications";

export function ResumeSection() {
  return (
    <Section id="resume" className="border-y border-border bg-surface/20">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Resume"
          title="The short version, on one screen"
          description={resume.summary}
        />
        <Reveal>
          <Button asChild variant="accent" size="lg">
            <a href={resume.pdfUrl} download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* <Reveal>
          <div className="rounded-2xl border border-border bg-bg/40 p-7">
            <div className="mb-6 flex items-center gap-2 text-fg">
              <Briefcase className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold">Experience</h3>
            </div>
            <ol className="relative space-y-7 border-l border-border pl-6">
              {resume.experience.map((exp) => (
                <li key={`${exp.role}-${exp.period}`} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
                  <div className="font-mono text-xs text-faint">{exp.period}</div>
                  <div className="mt-1 font-medium text-fg">{exp.role}</div>
                  <div className="text-sm text-accent">{exp.org}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal> */}

        {/* <div className="space-y-8"> */}
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-bg/40 p-7">
            <div className="mb-6 flex items-center gap-2 text-fg">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <ol className="space-y-5">
              {resume.education.map((ed) => (
                <li key={ed.degree}>
                  <div className="font-mono text-xs text-faint">
                    {ed.period}
                  </div>
                  <div className="mt-1 font-medium text-fg">{ed.degree}</div>
                  <div className="text-sm text-accent">{ed.school}</div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {ed.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-bg/40 p-7">
            <div className="mb-5 flex items-center gap-2 text-fg">
              <FileText className="h-5 w-5 text-accent" />
              <h3 className="text-lg font-semibold">Skills summary</h3>
            </div>
            <div className="space-y-4">
              {resume.skillsSummary.map((group) => (
                <div key={group.group}>
                  <div className="text-xs font-medium uppercase tracking-wider text-faint">
                    {group.group}
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-fg/[0.05] px-2 py-1 font-mono text-[11px] text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-faint">
                  Certifications
                </div>
                <p className="mt-1.5 text-sm text-muted">
                  {certifications.length} verified credentials including{" "}
                  {certifications
                    .slice(0, 2)
                    .map((c) => c.issuer)
                    .join(", ")}
                  , and more.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        {/* </div> */}
      </div>
    </Section>
  );
}
