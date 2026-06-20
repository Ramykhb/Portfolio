"use client";

import { useCountUp } from "@/hooks/use-count-up";
import type { Stat } from "@/types";

export function StatCard({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur transition-colors hover:border-fg/15">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex items-baseline gap-0.5 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
        <span ref={ref}>{value}</span>
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="relative mt-2 text-sm text-muted">{stat.label}</div>
    </div>
  );
}
