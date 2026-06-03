"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/design", label: "Design" },
  { href: "/photos", label: "Photos" },
  { href: "/music", label: "Music" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-light tracking-wide text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          Ryan Casey
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs uppercase tracking-[0.15em] transition-colors ${
                pathname.startsWith(href)
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="text-xs uppercase tracking-[0.15em]">
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.15em] transition-colors ${
                  pathname.startsWith(href)
                    ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
