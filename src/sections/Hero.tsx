"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/Typewriter";
import { siteConfig, socials } from "@/data/site";
import { EASE } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-content flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>
        </motion.div>

        <motion.div variants={item} className="mt-8">
          <div className="relative mx-auto h-24 w-24 sm:h-36 sm:w-36">
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/30 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-border ring-2 ring-fg/5">
              <Image
                src="/avatar.png"
                alt={siteConfig.name}
                fill
                priority
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-7 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{siteConfig.name}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 flex h-9 items-center justify-center text-xl font-medium text-muted sm:text-2xl md:text-3xl"
        >
          <Typewriter words={[...siteConfig.roles]} className="text-fg" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-4 flex items-center gap-1.5 text-sm text-faint"
        >
          <MapPin className="h-4 w-4" />
          {siteConfig.location}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild variant="accent" size="lg">
            <Link href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={siteConfig.resumeUrl} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex items-center gap-1">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition-all duration-300 hover:bg-surface hover:text-fg hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-muted"
          />
        </span>
      </motion.a>
    </section>
  );
}
