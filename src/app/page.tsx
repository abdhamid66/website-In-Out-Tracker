import { HeroSection } from '@/components/sections/HeroSection';
import { AppMockupSection } from '@/components/sections/AppMockupSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AppMockupSection />
      <StatisticsSection />
      <BenefitsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <ContactSection />
    </>
  );
}
