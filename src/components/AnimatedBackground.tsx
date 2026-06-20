"use client";

export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />

      <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-mesh-drift" />
      <div className="absolute right-[-10%] top-[20%] h-[45vh] w-[45vh] rounded-full bg-signal/10 blur-[120px] animate-mesh-drift [animation-delay:-8s]" />
      <div className="absolute bottom-[-10%] left-[-5%] h-[50vh] w-[50vh] rounded-full bg-accent/15 blur-[130px] animate-mesh-drift [animation-delay:-16s]" />

      <div className="absolute inset-0 grid-lines opacity-70" />

      <div className="absolute inset-0 noise opacity-[0.015] dark:opacity-[0.025]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(var(--bg))_100%)]" />
    </div>
  );
}
