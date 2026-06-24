import { HeroSection } from '@/components/sections/HeroSection';
import { AppMockupSection } from '@/components/sections/AppMockupSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection />
      <AppMockupSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <ContactSection />
    </>
  );
}
