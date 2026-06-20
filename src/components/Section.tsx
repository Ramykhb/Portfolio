import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 py-24 md:py-32", className)}
    >
      <div className="mx-auto w-full max-w-content px-6">{children}</div>
    </section>
  );
}
