import { services } from "@/app/lib/content";

export default function ServicesSection() {
  return (
    <section className="bg-muted/50" id="services">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink/50">
              What We Offer
            </p>
            <h2 className="text-3xl font-semibold text-ink">
              Career-Oriented Programs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-ink/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
