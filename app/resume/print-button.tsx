"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer mt-2"
    >
      Print / Save PDF
    </button>
  );
}
