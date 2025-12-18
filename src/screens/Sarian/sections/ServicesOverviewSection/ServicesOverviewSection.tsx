import { useLanguage } from "../../../../contexts/LanguageContext";

export const ServicesOverviewSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section className="relative w-full py-20 h-screen p-20">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Section background"
        src="https://c.animaapp.com/mj5q34e29K0n2Q/img/section3.svg"
      />

      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8 max-w-4xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="inline-flex items-center justify-center">
            <h2 className={`font-bold text-white text-3xl md:text-4xl lg:text-5xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
              {t('coverage.title')}
            </h2>
          </div>

          <p className={`max-w-[730px] font-normal text-white text-lg md:text-2xl lg:text-3xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('coverage.desc')}
          </p>
        </div>

        <div className="w-full max-w-[543px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <img
            className="w-full h-auto object-cover rounded-lg"
            alt="Google map showing service coverage"
            src="public\map.png"
          />
        </div>
      </div>
    </section>
  );
};
