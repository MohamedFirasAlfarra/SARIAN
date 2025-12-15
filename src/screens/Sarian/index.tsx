
import { FAQsSection } from "./sections/FAQsSection";
import { FeaturedItemsSection } from "./sections/FeaturedItemsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection";
import { WelcomeTitleSection } from "./sections/WelcomeTitleSection";

export const Sarian = (): JSX.Element => {
  return (
    <div
      className="bg-white overflow-x-hidden w-full relative"
      data-model-id="2:2"
    >
      <HeroSection />
      <MainContentSection />
      <ServicesOverviewSection />
      <FeaturedItemsSection />
      <WelcomeTitleSection />
      <FAQsSection />
      <FooterSection />
    </div>
  );
};
