import { useLanguage } from "../../../../contexts/LanguageContext";
import { Navbar } from "../../../../components/Navbar";
import { MobileAppBanner } from "../../../../components/MobileAppBanner";
import bgHeroSection from "../../../../assets/BgHero.jpeg";

export const HeroSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section
      style={{ backgroundImage: `url(${bgHeroSection})` }}
      className="relative w-full min-h-screen 
    bg-cover bg-right overflow-hidden py-20 md:py-28 lg:py-36 xl:py-96
    ">

      <MobileAppBanner />
      <Navbar />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-20 md:mt-24 lg:mt-32 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-[1440px]">
        <div className={`w-full lg:w-1/2 flex flex-col ${language === 'ar' ? 'lg:items-start text-right' : 'lg:items-end text-left'} 
        gap-4 md:gap-5 lg:gap-6 z-10 animate-fade-in opacity-0 [--animation-delay:200ms]`}>
          <h1 className="font-bold text-[#0d1b42] text-4xl md:text-5xl
          lg:text-[70px] leading-tight mb-2 text-center
          [font-family: Georgia, 'Times New Roman', Times, serif]">
            SARIAN
          </h1>
          <h2 className={`font-bold text-[#0d1b42] text-center text-2xl md:text-3xl lg:text-[50px] leading-snug
             [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('hero.title')}
          </h2>
          <h2 className={`font-bold text-[#0d1b42] text-center text-2xl md:text-3xl lg:text-[50px] leading-snug 
            [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('hero.subtitle')}
          </h2>

          <p className={`text-[#0d1b42] text-base md:text-lg lg:text-2xl text-center font-semibold max-w-[600px] leading-relaxed 
            [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('hero.description1')} {t('hero.description2')}
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative 
        mt-8 lg:mt-0 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] animate-float">
            <img
              className="w-full h-auto object-contain drop-shadow-2xl"
              alt="Sarian App Screenshot"
              src="https://c.animaapp.com/mj5q34e29K0n2Q/img/image-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
