export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin-slow rounded-full border-2 border-border border-t-accent" />
        <p className="text-sm text-muted">Loading…</p>
      </div>
    </div>
  );
}
