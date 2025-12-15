
import { FaGift, FaShoppingBasket } from "react-icons/fa";
import { GiChocolateBar, GiFlowerPot } from "react-icons/gi";
import { IoRestaurant } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContentWrapperSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  const servicesData = [
    {
      title: t('services.flowers.title'),
      description: t('services.flowers.desc'),
      buttonText: t('services.flowers.btn'),
      icon: GiFlowerPot,
      iconColor: "#FF69B4",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    },
    {
      title: t('services.grocery.title'),
      description: t('services.grocery.desc'),
      buttonText: t('services.grocery.btn'),
      icon: FaShoppingBasket,
      iconColor: "#4CAF50",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      title: t('services.food.title'),
      description: t('services.food.desc'),
      buttonText: t('services.food.btn'),
      icon: IoRestaurant,
      iconColor: "#FF5722",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
    {
      title: t('services.pharmacy.title'),
      description: t('services.pharmacy.desc'),
      buttonText: t('services.pharmacy.btn'),
      icon: MdHealthAndSafety,
      iconColor: "#2196F3",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      title: t('services.chocolate.title'),
      description: t('services.chocolate.desc'),
      buttonText: t('services.chocolate.btn'),
      icon: GiChocolateBar,
      iconColor: "#795548",
      bgGradient: "from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20",
    },
    {
      title: t('services.gift.title'),
      description: t('services.gift.desc'),
      buttonText: t('services.gift.btn'),
      icon: FaGift,
      iconColor: "#9C27B0",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
  ];

  return (
    <section id="services" className="relative w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-12 md:mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className={`font-bold text-black dark:text-white text-3xl sm:text-4xl md:text-5xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon as any;
            return (
              <Card
                key={index}
                className={`relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] shadow-[4px_4px_13.8px_#00000040] dark:shadow-[4px_4px_13.8px_#ffffff20] bg-gradient-to-br ${service.bgGradient} border-0 translate-y-[-1rem] animate-fade-in opacity-0 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                style={
                  {
                    "--animation-delay": `${(index + 1) * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="relative h-full p-4 sm:p-6 flex flex-col">
                  <div className="flex-1 flex items-center justify-center pt-8 pb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full blur-2xl opacity-50" />
                      <IconComponent
                        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 drop-shadow-2xl"
                        style={{ color: service.iconColor }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 pb-4">
                    <h3 className={`font-semibold text-black dark:text-white text-2xl sm:text-3xl md:text-4xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                      {service.title}
                    </h3>

                    <p className={`font-light text-black dark:text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl text-center [font-family:'Inter',Helvetica] tracking-[0] leading-normal px-2 ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                      {service.description}
                    </p>

                    <div className="flex justify-center mt-4">
                      <Button className="w-full max-w-[200px] h-auto bg-[#ffd400] hover:bg-[#ffd400]/90 rounded-[10px] shadow-[4px_4px_20px_2px_#00000040] px-6 sm:px-8 py-3 transition-transform hover:scale-105">
                        <span className={`font-semibold text-white text-lg sm:text-xl md:text-2xl text-center whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-normal ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                          {service.buttonText}
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
