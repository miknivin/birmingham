import { applicants } from "@/app/lib/content";

export default function ApplySection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="apply">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink/50">
            Who Can Apply
          </p>
          <h2 className="text-3xl font-semibold text-ink">
            Programs designed for every stage of learning
          </h2>
          <ul className="grid gap-3 text-ink/70">
            {applicants.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-ink/10 bg-card-soft" />
      </div>
    </section>
  );
}
