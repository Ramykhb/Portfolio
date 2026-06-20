"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovering, setHovering] = React.useState(false);
  const [hidden, setHidden] = React.useState(true);

  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const el = e.target as HTMLElement;
      setHovering(
        Boolean(
          el.closest(
            'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]',
          ),
        ),
      );
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor");
    };
  }, [x, y]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute -ml-4 -mt-4"
      >
        <motion.div
          animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.9 : 0.6 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="h-8 w-8 rounded-full border border-accent/70"
        />
      </motion.div>
      <motion.div style={{ x, y }} className="absolute -ml-1 -mt-1">
        <div className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>
    </div>
  );
}
