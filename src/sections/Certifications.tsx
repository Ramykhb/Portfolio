"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications } from "@/data/certifications";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials that back the work"
        description="Verified certifications across cloud, containers, and engineering practice. Each links out to a public verification page."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certifications.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.verifyUrl}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur transition-colors hover:border-fg/15"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-accent">
                  <BadgeCheck className="h-4 w-4" />
                  {cert.issuer}
                </div>
                <span className="font-mono text-xs text-faint">{cert.date}</span>
              </div>

              <h3 className="mt-2 text-[15px] font-semibold leading-snug text-fg">
                {cert.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-fg/[0.05] px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-faint">
                <span className="font-mono">ID: {cert.credentialId}</span>
                <span className="flex items-center gap-1 text-fg/70 transition-colors group-hover:text-accent">
                  Verify <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
