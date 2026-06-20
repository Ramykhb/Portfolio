import localFont from "next/font/local";

export const sans = localFont({
  src: [
    { path: "./inter-400.woff2", weight: "400", style: "normal" },
    { path: "./inter-500.woff2", weight: "500", style: "normal" },
    { path: "./inter-600.woff2", weight: "600", style: "normal" },
    { path: "./inter-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const mono = localFont({
  src: [
    { path: "./jetbrains-400.woff2", weight: "400", style: "normal" },
    { path: "./jetbrains-500.woff2", weight: "500", style: "normal" },
    { path: "./jetbrains-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});
