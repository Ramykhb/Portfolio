"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

export function Preloader() {
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const t = setTimeout(() => setDone(true), reduced ? 200 : 1400);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  const initials = siteConfig.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-bg"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid h-16 w-16 place-items-center"
            >
              <span className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl" />
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface text-xl font-semibold text-fg">
                <img
                  src="/logo.svg"
                  alt={siteConfig.name}
                  className="ml-1 invert transition-[filter] duration-300 dark:invert-0"
                />
              </span>
              <motion.span
                className="absolute -inset-1 rounded-2xl border-2 border-transparent border-t-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-fg/[0.08]"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-accent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
