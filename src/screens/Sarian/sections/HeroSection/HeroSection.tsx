import { useLanguage } from "../../../../contexts/LanguageContext";
import { Navbar } from "../../../../components/Navbar";
import { MobileAppBanner } from "../../../../components/MobileAppBanner";
import bgHeroSection from "../../../../assets/BgHero.jpeg";

export const HeroSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section
      style={{ backgroundImage: `url(${bgHeroSection})` }}
     className="relative w-full h-[1500px] 
    bg-[url(https://c.animaapp.com/mj5q34e29K0n2Q/img/backgroundhersection.svg)]
    bg-cover bg-right overflow-hidden py-16  lg:py-24 
    
    ">

      <MobileAppBanner />
      <Navbar />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-32 lg:mt-32 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 max-w-[1440px]">
        <div className={`w-full lg:w-1/2 flex flex-col ${language === 'ar' ? 'lg:items-start text-right' : 'lg:items-end text-left'} 
        gap-6 z-10 animate-fade-in opacity-0 [--animation-delay:200ms]`}>
          <h1 className="font-bold text-[#0d1b42] text-5xl 
          lg:text-[70px] leading-tight mb-2  text-center
          [font-family:'Inter',Helvetica]">
            SARIAN
          </h1>
          <h2 className={`font-bold text-[#0d1b42] text-3xl md:text-4xl lg:text-[50px] leading-snug [font-family:'Inter',Helvetica] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('hero.title')} {t('hero.subtitle')}
          </h2>

          <p className={`text-[#0d1b42] text-xl lg:text-2xl font-medium max-w-[700px] leading-relaxed [font-family:'Inter',Helvetica] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('hero.description1')} {t('hero.description2')}
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative 
        mt-12 lg:mt-0 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative w-full max-w-[500px] animate-float">
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
