import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="grid min-h-[80vh] place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button asChild variant="accent" size="lg" className="mt-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
