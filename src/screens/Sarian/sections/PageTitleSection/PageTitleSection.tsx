import { useLanguage } from "../../../../contexts/LanguageContext";

export const PageTitleSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section className="flex flex-col w-full max-w-[918px] mx-auto items-center gap-[34px] px-4">
      <header className="inline-flex items-center justify-center gap-2.5 p-2.5 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <h1 className={`relative w-fit mt-[-1.00px] font-bold text-black text-3xl sm:text-4xl md:text-[50px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
          {t('faq.title')}
        </h1>
      </header>

      <p className={`relative w-full font-normal text-black text-xl sm:text-2xl md:text-3xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'} translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]`}>
        {t('faq.subtitle')}
      </p>
    </section>
  );
};
