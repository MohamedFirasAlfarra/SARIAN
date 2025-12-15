

import { useLanguage } from "../../../../contexts/LanguageContext";

export const WelcomeTitleSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section className="flex flex-col w-full max-w-[918px] mx-auto items-center gap-[34px] px-4">
      <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <h2 className={`relative w-fit mt-[-1.00px] font-bold text-black text-3xl md:text-4xl lg:text-[50px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
          {t('faq.title')}
        </h2>
      </div>

      <p className={`relative self-stretch font-normal text-black text-lg md:text-2xl lg:text-3xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
        {t('faq.subtitle')}
      </p>
    </section>
  );
};
