import { useLanguage } from "../../../../contexts/LanguageContext";
import mapImg from "../../../../assets/map.png";

export const ServicesOverviewSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[500px] 
    lg:min-h-screen py-32 md:py-20 lg:py-24 px-4 md:px-8 lg:px-20">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Section background"
        src="https://c.animaapp.com/mj5q34e29K0n2Q/img/section3.svg"
      />

      <div className="relative z-10 container mx-auto py-8 md:py-12 lg:py-16 flex flex-col items-center gap-12 md:gap-14 lg:gap-16">
        <div className="flex flex-col items-center gap-6 md:gap-7 lg:gap-8 max-w-4xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="inline-flex items-center justify-center">
            <h2 className={`font-bold text-white text-2xl md:text-3xl lg:text-4xl
               text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
              {t('coverage.title')}
            </h2>
          </div>

          <p className={`max-w-[730px] font-normal text-white text-base md:text-lg
             lg:text-xl text-center [font-family: Georgia, 'Times New Roman', Times, serif]
              tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('coverage.desc')}
          </p>
        </div>

        <div className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[543px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <img
            className="w-full h-auto object-cover rounded-lg"
            alt="Google map showing service coverage"
            src={mapImg}
          />
        </div>
      </div>
    </section>
  );
};
