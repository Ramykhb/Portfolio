"use client";

import * as React from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((n) => n.href.replace("#", ""));

export function LiquidGlassNavbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 26,
          delay: 0.15,
        }}
        className="pointer-events-auto w-full max-w-content"
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.975 : 1,
            paddingTop: scrolled ? 6 : 9,
            paddingBottom: scrolled ? 6 : 9,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className={cn(
            "liquid-glass relative flex items-center justify-between gap-2 rounded-full px-3 sm:px-4",
            scrolled && "shadow-2xl",
          )}
          style={{
            backdropFilter: scrolled
              ? "blur(28px) saturate(200%)"
              : "blur(20px) saturate(180%)",
            WebkitBackdropFilter: scrolled
              ? "blur(28px) saturate(200%)"
              : "blur(20px) saturate(180%)",
          }}
        >
          <Link
            href="/"
            aria-label="Home"
            className="group relative z-10 flex shrink-0 items-center gap-2 rounded-full px-2 py-1"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg text-bg">
              <img
                src="/logo.svg"
                alt={siteConfig.name}
                className="h-8 w-8 invert transition-[filter] duration-300 dark:invert-0"
              />
            </span>
          </Link>

          <ul className="relative z-10 hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "relative flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-300",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-fg/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1px_4px_rgba(0,0,0,0.12)]"
                        style={{
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 flex shrink-0 items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full text-fg/80 transition-colors hover:text-fg md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="liquid-glass mt-2 overflow-hidden rounded-3xl p-2 md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const id = item.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-fg/[0.07] text-fg"
                            : "text-muted hover:bg-fg/[0.04] hover:text-fg",
                        )}
                      >
                        {item.label}
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
