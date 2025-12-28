import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const MainContentSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  const services = [
    {
      title: t('services.flowers.title'),
      description: t('services.flowers.desc'),
      buttonText: t('services.flowers.btn'),
      image: "https://c.animaapp.com/mj5q34e29K0n2Q/img/pngegg-2-2.png",
    },
    {
      title: t('services.food.title'),
      description: t('services.food.desc'),
      buttonText: t('services.food.btn'),
      image: "https://c.animaapp.com/mj5q34e29K0n2Q/img/pizza-2.png",
    },
    {
      title: t('services.grocery.title'),
      description: t('services.grocery.desc'),
      buttonText: t('services.grocery.btn'),
      image: "https://c.animaapp.com/mj5q34e29K0n2Q/img/chocolate-2.png",
    },
    {
      title: t('services.pharmacy.title'),
      description: t('services.pharmacy.desc'),
      buttonText: t('services.pharmacy.btn'),
      image: "https://c.animaapp.com/mj5q34e29K0n2Q/img/pngegg-2-2.png",
    },
    {
      title: t('services.chocolate.title'),
      description: t('services.chocolate.desc'),
      buttonText: t('services.chocolate.btn'),
      image: "https://c.animaapp.com/mj5q34e29K0n2Q/img/chocolate-2.png",
    },
    {
      title: t('services.gift.title'),
      description: t('services.gift.desc'),
      buttonText: t('services.gift.btn'),
      image: "https://c.animaapp.com/mj5q34e29K0n2Q/img/pizza-2.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-14 lg:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex items-center justify-center mb-12 md:mb-14 lg:mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className={`font-bold text-black text-2xl md:text-3xl lg:text-[40px] text-center
             [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal
              ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('services.title')}
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative h-full min-h-[380px] md:min-h-[420px] lg:min-h-[480px]
                bg-[url(https://c.animaapp.com/mj5q34e29K0n2Q/img/vector-2-1.svg)]
                bg-[100%_100%] bg-no-repeat bg-white/50 border-0 rounded-2xl translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${(index + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="relative h-full flex flex-col items-center justify-between p-4 md:p-6 lg:p-8 gap-4 md:gap-5 lg:gap-6">
                <div className="w-full flex justify-center items-center h-[120px] md:h-[150px] lg:h-[180px]">
                  <img
                    className="w-auto h-full max-h-[180px] object-contain transition-transform hover:scale-110 duration-300"
                    alt={service.title}
                    src={service.image}
                  />
                </div>

                <div className="flex flex-col items-center gap-3 md:gap-4 w-full flex-grow">
                  <h3 className={`font-semibold text-black text-xl md:text-2xl lg:text-3xl text-center whitespace-normal [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    {service.title}
                  </h3>

                  <p className={`font-light text-black text-sm md:text-base lg:text-lg text-center [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    {service.description}
                  </p>
                </div>

                <div className="w-full flex justify-center pt-2 md:pt-3 lg:pt-4">
                  <Button className="w-full max-w-[180px] md:max-w-[220px] h-auto px-5 md:px-6 py-2.5 md:py-3 bg-[#ffd400] hover:bg-[#ffd400]/90 rounded-[10px] shadow-[4px_4px_20px_2px_#00000040] transition-transform hover:scale-105">
                    <span className={`font-semibold text-white text-base md:text-lg lg:text-xl text-center whitespace-nowrap [font-family: Georgia, 'Times New Roman', Times, serif] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                      {service.buttonText}
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
