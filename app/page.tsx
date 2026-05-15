import type { Metadata } from 'next';
import homePageContent from './content/home.json';
import { CoreServices } from './features/home/sections/CoreServices';
import { HomeHero } from './features/home/sections/HomeHero';
import { HowItWorks } from './features/home/sections/HowItWorks';
import type { HomePageContent } from './types/home/content.types';

const homeContent = homePageContent as HomePageContent;

export const metadata: Metadata = homeContent.seo;

export default function HomePage() {
  const { coreServices, hero, howItWorks } = homeContent;

  return (
    <main>
      <HomeHero content={hero} />
      <HowItWorks content={howItWorks} />
      <CoreServices content={coreServices} />
    </main>
  );
}
