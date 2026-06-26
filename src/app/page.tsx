import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorksSection />
      </ScrollReveal>
      <ScrollReveal>
        <ScreenshotsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <DownloadSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </>
  );
}

