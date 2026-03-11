import PrivacySection from "@/app/components/sections/PrivacySection";
import HeaderBar from "../components/sections/HeaderBar";
import Image from "next/image";
export default function PrivacyPage() {
  return (
    <div className="bg-surface text-ink">
      <HeaderBar isNav={false} />
      <main>
        <PrivacySection />
      </main>
      <footer className="border-t border-ink/10 bg-surface px-6 py-10 text-sm text-ink/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Birmingham Associates"
                width={32}
                height={32}
              />
              <p className="text-ink">Birmingham Associates</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@birminghamassociates.in">
                Email: info@birminghamassociates.in
              </a>
              <a href="tel:+919074146495">Phone: +919074146495</a>
            </div>
            <p>
              South Gate, 7th Floor, Chakolas Heights, Near InforPark, Seaport -
              Airport Rd, Chittethukara, Kakkanad, Kerala 682037
            </p>
          </div>
          <a
            className="font-semibold text-ink transition hover:text-ink/80"
            href="/privacy"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
