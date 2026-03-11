import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20" id="about">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-ink/50">
            About Birmingham Associates
          </p>
          <h2 className="text-3xl font-semibold text-ink">
            Empowering Students Through Education
          </h2>
          <p className="text-ink/70">
            Birmingham Associates is an education-focused organization based in
            Kerala, committed to helping students build successful careers
            through the right learning opportunities.
          </p>
          <p className="text-ink/70">
            We work with students across India to guide them towards
            industry-relevant courses, professional programs, and international
            education pathways. Our goal is simple. Make quality education
            accessible and help students make informed decisions about their
            future.
          </p>
          <p className="text-ink/70">
            With expert guidance, personalized counselling, and trusted academic
            partnerships, Birmingham Associates supports students from course
            selection to career placement.
          </p>
        </div>
        <div className="flex items-center">
          <div className="h-72 w-full rounded-3xl border border-ink/10 bg-card-soft">
            <Image
              src="/imgs/about.jpg"
              alt="Birmingham Associates"
              width={600}
              height={600}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
