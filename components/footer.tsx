import Link from "next/link";

const links = [
  { href: "https://github.com/rcaseyx", label: "GitHub" },
  { href: "https://www.linkedin.com/in/ryancaseycode/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)] tracking-wide">
          © {new Date().getFullYear()} Ryan Casey
        </span>
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
