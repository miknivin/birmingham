import { reasons } from "@/app/lib/content";

export default function WhyChooseSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="why">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink/50">
            Why Choose Birmingham Associates
          </p>
          <h2 className="text-3xl font-semibold text-ink">
            Trusted guidance for ambitious students
          </h2>
          <p className="text-ink/70">
            Expert guidance, trusted partnerships, and a student-centric approach
            ensure every learner finds the right program and pathway.
          </p>
          <ul className="grid gap-3 text-ink/70">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-hero-card" />
      </div>
    </section>
  );
}
