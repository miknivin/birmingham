import OpenModalButton from "../counselling/OpenModalButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-hero-grid opacity-80" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink/60">
            Global Education Partners
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Build Your Future with Global Education Opportunities
          </h1>
          <p className="text-lg text-ink/70">
            Birmingham Associates helps students across India access quality
            education through career-focused programs, international pathways,
            and skill-based courses designed for the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full border border-ink/20 bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              href="#services"
            >
              Explore Programs
            </a>
            <OpenModalButton className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent/90">
              Book a Free Counselling
            </OpenModalButton>
          </div>
        </div>
        <div className="relative">
          <div className="h-80 w-full rounded-3xl bg-hero-card shadow-xl shadow-ink/10" />
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-2xl border border-ink/10 bg-surface shadow-lg shadow-ink/10 md:block" />
        </div>
      </div>
    </section>
  );
}
