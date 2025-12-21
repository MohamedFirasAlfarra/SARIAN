import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Truck,  Building2} from "lucide-react";

export const FeaturedItemsSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  const cardsData = [
    {
      id: "delivery",
      illustration: "https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-10.svg",
      icon: <Truck className="w-12 h-12 md:w-16 md:h-16" />,
      title: t('featured.driver.title'),
      description: t('featured.driver.desc'),
      buttonText: t('featured.driver.btn'),
    },
    {
      id: "partner",
      illustration: "https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-11.svg",
      icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" />,
      title: t('featured.partner.title'),
      description: t('featured.partner.desc'),
      buttonText: t('featured.partner.btn'),
    },
  ];

  return (
    <section className="relative w-full flex justify-center overflow-hidden py-52 mb-10">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        alt="Background"
        src="https://c.animaapp.com/mj5q34e29K0n2Q/img/background-1.svg"
      />
      <div className="relative w-full max-w-[1436px] z-10">
        <div className="relative flex flex-col items-center gap-8 px-4 pt-32 pb-20">
          <header className={`flex flex-col items-center gap-8 max-w-[918px] translate-y-[-1rem] animate-fade-in opacity-0 ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            <h2 className="font-bold text-black text-[38px] text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal px-2.5 py-2.5">
              {t('featured.title')}
            </h2>

            <p className="font-normal text-black text-2xl text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
              {t('featured.desc')}
            </p>
          </header>

          <div className="flex flex-row flex-wrap items-start justify-center gap-[55px] mt-12 w-full">
            {cardsData.map((card, index) => (
              <Card
                key={card.id}
                className="relative w-full max-w-[585px] bg-white rounded-[20px] shadow-[4px_4px_8.2px_4px_#00000040] overflow-visible translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${(index + 1) * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col items-center gap-[47px] px-[27px] py-[33px]">
                  <img
                    className="relative flex-shrink-0"
                    alt="Illustration"
                    src={card.illustration}
                  />

                  <div className={`flex flex-col items-center gap-6 w-full max-w-[415px] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    <h3 className="font-bold text-black text-[28px] text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
                      {card.title}
                    </h3>

                    <p className="font-normal text-black text-xl text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
                      {card.description}
                    </p>
                  </div>

                  <Button className="h-14 w-full bg-[#ffd400] hover:bg-[#ffd400]/90 rounded-[10px] px-[34px] py-[13px] transition-colors">
                    <span className="font-semibold text-black text-[20px] text-center whitespace-nowrap [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
                      {card.buttonText}
                    </span>
                  </Button>

                  <div className="absolute top-[58px] left-1/2 -translate-x-1/2">
                    {card.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};