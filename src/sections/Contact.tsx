"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Check, Loader2 } from "lucide-react";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";
import { siteConfig, socials } from "@/data/site";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export function Contact() {
  const [sent, setSent] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (values: ContactValues) => {
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = (await response.json().catch(() => null)) as {
      error?: string;
    } | null;

    if (!response.ok) {
      throw new Error(result?.error ?? "Failed to send your message");
    }

    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something"
            description="Have a role, a project, or just a question? Send a message and I'll get back to you."
          />

          <div className="mt-10 space-y-3">
            {contactChannels.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/40 p-4 backdrop-blur transition-colors hover:border-fg/15">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-bg/50 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-faint">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium text-fg">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <Reveal key={c.label}>
                  <a href={c.href}>{inner}</a>
                </Reveal>
              ) : (
                <Reveal key={c.label}>{inner}</Reveal>
              );
            })}

            <Reveal>
              <div className="flex items-center gap-2 pt-2">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted transition-all hover:-translate-y-0.5 hover:bg-surface hover:text-fg"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <Input
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <Input
                  type="email"
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Subject" error={errors.subject?.message}>
                <Input
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                  {...register("subject")}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" error={errors.message?.message}>
                <Textarea
                  placeholder="Tell me about the role or project…"
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
              </Field>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={isSubmitting || sent}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : sent ? (
                  <>
                    <Check className="h-4 w-4" />
                    Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>

              <AnimatePresence>
                {submitError ? (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-500"
                  >
                    {submitError}
                  </motion.span>
                ) : sent ? (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-emerald-500"
                  >
                    Thank you, I&apos;ll be in touch soon.
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fg/90">
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 block text-xs text-red-500"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
