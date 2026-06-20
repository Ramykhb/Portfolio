import Link from "next/link";
import { navItems, siteConfig, socials } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-content px-6 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="#home" className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg">
                <img
                  src="/logo.svg"
                  alt={siteConfig.name}
                  className="h-8 w-8 invert transition-[filter] duration-300 dark:invert-0"
                />
              </span>
              <span className="font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-1">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#resume"
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              Resume
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-6 text-sm text-faint sm:flex-row">
          <p className="text-center">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
