export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 flex flex-col justify-center min-h-[80vh]">
      <p className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl lg:text-8xl font-light text-[var(--color-text)] leading-tight max-w-4xl">
        <span className="block animate-slide-up">
          Software engineer.
        </span>
        <span className="block animate-slide-up" style={{ animationDelay: "560ms" }}>
          Drummer.
        </span>
        <span className="block animate-slide-up" style={{ animationDelay: "1120ms" }}>
          Photographer.
        </span>
        <span className="block animate-slide-up" style={{ animationDelay: "1680ms" }}>
          Occasional designer.
        </span>
      </p>
      <p
        className="mt-8 text-sm uppercase tracking-[0.2em] text-[var(--color-text-muted)] animate-slide-up"
        style={{ animationDelay: "2240ms" }}
      >
        Based in East Atlanta.
      </p>
    </section>
  );
}
