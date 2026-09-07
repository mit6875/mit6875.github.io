import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIT 6.5620 — Integer Programming",
  description: "Living lecture notes for MIT 6.5620 Integer Programming.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
