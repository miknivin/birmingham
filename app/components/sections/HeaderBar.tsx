import Image from "next/image";
import OpenModalButton from "../counselling/OpenModalButton";

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Birmingham Associates" width={36} height={36} />
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-ink/70">
            Birmingham Associates
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 md:flex">
          <a className="transition hover:text-ink" href="#about">
            About
          </a>
          <a className="transition hover:text-ink" href="#services">
            Programs
          </a>
          <a className="transition hover:text-ink" href="#process">
            Process
          </a>
          <a className="transition hover:text-ink" href="#apply">
            Apply
          </a>
        </nav>
        <OpenModalButton className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-surface transition hover:bg-accent/90">
          Book Counselling
        </OpenModalButton>
      </div>
    </header>
  );
}
