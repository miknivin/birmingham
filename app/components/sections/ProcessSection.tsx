import { processSteps } from "@/app/lib/content";

export default function ProcessSection() {
  return (
    <section className="bg-muted/50" id="process">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink/50">
              Our Process
            </p>
            <h2 className="text-3xl font-semibold text-ink">
              A clear roadmap from interest to success
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-ink/10 bg-surface p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink/70">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
