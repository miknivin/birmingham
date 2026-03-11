import Image from "next/image";
import CounsellingModal from "@/app/components/counselling/CounsellingModal";
import AboutSection from "@/app/components/sections/AboutSection";
import ApplySection from "@/app/components/sections/ApplySection";
import CtaSection from "@/app/components/sections/CtaSection";
import HeaderBar from "@/app/components/sections/HeaderBar";
import HeroSection from "@/app/components/sections/HeroSection";
import ProcessSection from "@/app/components/sections/ProcessSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import WhyChooseSection from "@/app/components/sections/WhyChooseSection";

export default function Home() {
  return (
    <div className="bg-surface text-ink">
      <HeaderBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <ApplySection />
        <CtaSection />
      </main>
      <footer className="border-t border-ink/10 bg-surface px-6 py-10 text-sm text-ink/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Birmingham Associates" width={32} height={32} />
              <p className="text-ink">Birmingham Associates</p>
            </div>
            <p>Email: info@birminghamassociates.in</p>
            <p>Phone: +919074146495</p>
            <p>
              South Gate, 7th Floor, Chakolas Heights, Near InforPark, Seaport -
              Airport Rd, Chittethukara, Kakkanad, Kerala 682037
            </p>
          </div>
          <a className="font-semibold text-ink transition hover:text-ink/80" href="/privacy">
            Privacy Policy
          </a>
        </div>
      </footer>
      <CounsellingModal />
    </div>
  );
}
