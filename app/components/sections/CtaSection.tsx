import OpenModalButton from "../counselling/OpenModalButton";

export default function CtaSection() {
  return (
    <section className="bg-accent" id="cta">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center text-surface">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-surface/70">
          Start Your Journey Today
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-surface md:text-4xl">
          The right education can change your future.
        </h2>
        <p className="mt-4 text-lg text-surface/80">
          Let Birmingham Associates guide you toward the right opportunity.
        </p>
        <OpenModalButton className="mt-8 rounded-full bg-surface px-6 py-3 text-sm font-semibold text-ink transition hover:bg-surface/90">
          Book a Free Counselling Session Today
        </OpenModalButton>
      </div>
    </section>
  );
}
