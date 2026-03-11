"use client";

import { useEffect, useRef, useState } from "react";

type CounsellingModalProps = {
  triggerEventName?: string;
};

export default function CounsellingModal({
  triggerEventName = "open-counselling-modal",
}: CounsellingModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener(triggerEventName, handleOpen);

    return () => {
      window.removeEventListener(triggerEventName, handleOpen);
    };
  }, [triggerEventName]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        focusableSelector
      );

      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current?.checkValidity()) {
      formRef.current?.reportValidity();
      return;
    }

    setIsSubmitted(true);
    formRef.current?.reset();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-6 py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="counselling-title"
      onClick={() => setIsOpen(false)}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl rounded-3xl bg-surface p-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-ink" id="counselling-title">
            Book a Free Counselling
          </h2>
          <button
            className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 transition hover:text-ink"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            Close
          </button>
        </div>

        {!isSubmitted ? (
          <form ref={formRef} className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-ink/70">
                Full Name
                <input
                  ref={firstFieldRef}
                  className="rounded-xl border border-ink/10 px-4 py-3 text-sm text-ink shadow-sm focus:border-ink/40 focus:outline-none"
                  name="fullName"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm text-ink/70">
                Phone Number
                <input
                  className="rounded-xl border border-ink/10 px-4 py-3 text-sm text-ink shadow-sm focus:border-ink/40 focus:outline-none"
                  name="phone"
                  placeholder="+91"
                  required
                  type="tel"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-ink/70">
              Email Address
              <input
                className="rounded-xl border border-ink/10 px-4 py-3 text-sm text-ink shadow-sm focus:border-ink/40 focus:outline-none"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-ink/70">
                City
                <input
                  className="rounded-xl border border-ink/10 px-4 py-3 text-sm text-ink shadow-sm focus:border-ink/40 focus:outline-none"
                  name="city"
                  placeholder="Kochi"
                  required
                  type="text"
                />
              </label>
              <label className="grid gap-2 text-sm text-ink/70">
                Education Level
                <select
                  className="rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink shadow-sm focus:border-ink/40 focus:outline-none"
                  name="educationLevel"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option value="Higher Secondary">Higher Secondary</option>
                  <option value="College">College</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Professional">Professional</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm text-ink/70">
              Program Interest
              <select
                className="rounded-xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink shadow-sm focus:border-ink/40 focus:outline-none"
                name="programInterest"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a program
                </option>
                <option value="Career-Oriented Programs">
                  Career-Oriented Programs
                </option>
                <option value="International Education Pathways">
                  International Education Pathways
                </option>
                <option value="Professional Skill Development">
                  Professional Skill Development
                </option>
                <option value="Student Career Guidance">
                  Student Career Guidance
                </option>
              </select>
            </label>
            <button
              className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent/90"
              type="submit"
            >
              Submit Request
            </button>
          </form>
        ) : (
          <div className="mt-8 space-y-4 text-center">
            <p className="text-lg font-semibold text-ink">
              Thanks! We have received your request.
            </p>
            <p className="text-sm text-ink/70">
              Our counsellors will reach out with personalized guidance soon.
            </p>
            <button
              className="rounded-full border border-ink/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

