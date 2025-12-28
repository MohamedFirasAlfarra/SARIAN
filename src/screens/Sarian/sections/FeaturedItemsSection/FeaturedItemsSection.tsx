import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Truck, Building2 } from "lucide-react";

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
    <section className="relative w-full flex justify-center overflow-hidden
    w-full min-h-[500px] md:min-h-[500px] 
    lg:min-h-screen">
      {/* CSS Background instead of SVG */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          // background: 'linear-gradient(165deg, #EAEAEA 0%, #EAEAEA 70%, #F0F0F0 100%)',
          clipPath: 'polygon(100% 17%, 0 0, 0 76%, 100% 100%)'
        }}
      />
      <div className="relative w-full max-w-[1436px] z-10">
        <div className="relative flex flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-28">
          {/* Header */}
          <header className={`flex flex-col items-center gap-6 md:gap-7 lg:gap-8 max-w-[918px] translate-y-[-1rem] animate-fade-in opacity-0 ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            <h2 className="font-bold text-black text-2xl md:text-3xl lg:text-[38px] text-center 
            [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
              {t('featured.title')}
            </h2>

            <p className="font-normal text-black text-base md:text-lg lg:text-2xl text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
              {t('featured.desc')}
            </p>
          </header>

          {/* Cards Container */}
          <div className="flex flex-row flex-wrap items-start justify-center gap-6 md:gap-8 lg:gap-[55px] mt-6 md:mt-8 lg:mt-12 w-full">
            {cardsData.map((card, index) => (
              <Card
                key={card.id}
                className="relative w-full max-w-[300px] md:max-w-[450px] lg:max-w-[585px] bg-white
                 rounded-[20px] shadow-[4px_4px_8.2px_4px_#00000040] overflow-visible 
                 translate-y-[-1rem] animate-fade-in opacity-0 lg:overflow-visible"
                style={
                  {
                    "--animation-delay": `${(index + 1) * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="flex flex-col items-center gap-6 md:gap-7 lg:gap-[47px] px-6 md:px-8 lg:px-[27px] py-8 md:py-10 lg:py-[33px]">
                  {/* Icon Circle - Only on Mobile/Tablet */}
                  <div className="lg:hidden w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#f5f0e8] flex items-center justify-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>

                  {/* Illustration - Only on Desktop */}
                  <img
                    className="hidden lg:block relative flex-shrink-0"
                    alt="Illustration"
                    src={card.illustration}
                  />

                  {/* Text Content */}
                  <div className={`flex flex-col items-center gap-4 md:gap-5 lg:gap-6 w-full max-w-[415px] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    <h3 className="font-bold text-black text-xl md:text-2xl lg:text-[28px] text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
                      {card.title}
                    </h3>

                    <p className="font-normal text-black text-sm md:text-base lg:text-xl text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Button */}
                  <Button className="h-12 md:h-13 lg:h-14 w-full bg-[#ffd400] hover:bg-[#ffd400]/90 rounded-[10px] px-6 md:px-7 lg:px-[34px] py-3 md:py-3.5 lg:py-[13px] transition-colors">
                    <span className="font-semibold text-black text-base md:text-lg lg:text-[20px] text-center whitespace-nowrap [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal">
                      {card.buttonText}
                    </span>
                  </Button>

                  {/* Floating Icon - Only on Desktop */}
                  <div className="hidden lg:block absolute top-[58px] left-1/2 -translate-x-1/2">
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