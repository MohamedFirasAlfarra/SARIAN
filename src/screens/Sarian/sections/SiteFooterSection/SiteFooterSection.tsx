import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const SiteFooterSection = (): JSX.Element => {
  const { t, language, setLanguage } = useLanguage();

  const footerColumns = [
    {
      title: t('footer.cities'),
      items: [
        t('footer.cities.damascus'),
        t('footer.cities.daraa'),
        t('footer.cities.homs'),
        t('footer.cities.tartus'),
        t('footer.cities.aleppo'),
      ],
    },
    {
      title: t('footer.restaurants'),
      items: ["Moojood", "دار الناجي", "SuchiHouse", "Capanna", "dipndip"],
    },
    {
      title: t('footer.cuisines'),
      items: [
        t('footer.foods.syrian'),
        t('footer.foods.asian'),
        t('footer.foods.italian'),
        t('footer.foods.desserts'),
        t('footer.foods.syrian'),
      ],
    },
    {
      title: t('footer.services'),
      items: [
        t('footer.services.food'),
        t('footer.services.flowers'),
        t('footer.services.chocolate'),
        t('footer.services.grocery'),
        t('footer.services.gift'),
      ],
    },
  ];

  const bottomLinks = [
    t('footer.aboutUs'),
    t('footer.contact'),
    t('footer.howItWorks'),
    t('footer.terms'),
    t('footer.privacy'),
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "#1877F2" },
    { icon: FaInstagram, href: "#", color: "#E4405F" },
    { icon: FaTwitter, href: "#", color: "#1DA1F2" },
    { icon: FaLinkedin, href: "#", color: "#0A66C2" },
    { icon: FaYoutube, href: "#", color: "#FF0000" },
  ];

  return (
    <footer className="relative w-full bg-transparent">
      <img
        className="w-full h-auto object-cover dark:brightness-75 transition-all duration-300"
        alt="Background"
        src="https://c.animaapp.com/mj1g9f79j4dIxO/img/background-1.svg"
      />

      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 py-8 md:py-12">
            {/* Language Controls */}
            <div className="flex flex-col items-center lg:items-start gap-4 order-3 lg:order-1">
              <Button
                variant="secondary"
                className="h-auto bg-[#333333] hover:bg-[#444444] rounded-[20px] px-4 sm:px-6 py-3 sm:py-4 gap-3 transition-colors"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              >
                <img
                  className="w-2 h-2"
                  alt="Vector"
                  src="https://c.animaapp.com/mj1g9f79j4dIxO/img/vector-1.svg"
                />
                <img
                  className="w-6 h-6 sm:w-7 sm:h-7 object-cover"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mj1g9f79j4dIxO/img/ellipse-1.png"
                />
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-lg sm:text-xl">
                  {t('footer.language')}
                </span>
              </Button>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 order-2 lg:order-2 w-full lg:w-auto">
              {footerColumns.map((column, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 md:gap-6"
                >
                  <h3 className={`font-medium text-white text-lg sm:text-xl md:text-2xl text-center [font-family:'Inter',Helvetica] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    {column.title}
                  </h3>
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    {column.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl text-center [font-family:'Inter',Helvetica] cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Logo & App Store Buttons */}
            <div className="flex flex-col items-center lg:items-end gap-6 md:gap-8 order-1 lg:order-3">
              <div className="w-40 sm:w-48 md:w-56 lg:w-64 p-2.5">
                <img
                  className="w-full h-auto rounded-[20px] object-cover"
                  alt="Logo"
                  src="https://c.animaapp.com/mj1g9f79j4dIxO/img/logo-sarian2-1.png"
                />
              </div>

              <div className="flex flex-col items-center gap-4 md:gap-5">
                <div className="w-28 sm:w-32 md:w-36 h-10 sm:h-12 rounded-[15px] border border-solid border-black dark:border-white [background:url(https://c.animaapp.com/mj1g9f79j4dIxO/img/frame-3-1.png)_50%_50%_/_cover] cursor-pointer hover:opacity-80 transition-opacity" />
                <div className="w-28 sm:w-32 md:w-36 h-10 sm:h-12 rounded-[15px] border border-solid border-black dark:border-white [background:url(https://c.animaapp.com/mj1g9f79j4dIxO/img/frame-4-1.png)_50%_50%_/_cover] cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>
          </div>

          <div className="py-4 md:py-6">
            <Separator className="bg-white/20" />
          </div>

          {/* Social Media & Bottom Links */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 py-6 md:py-8">
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon as any;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <IconComponent
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: social.color }}
                    />
                  </a>
                );
              })}
            </div>

            <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`[font-family:'Inter',Helvetica] font-medium text-[#c7c7c7] text-sm sm:text-base md:text-lg lg:text-xl text-center hover:text-white transition-colors ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="py-4 md:py-6">
            <Separator className="bg-white/20" />
          </div>

          {/* Copyright */}
          <div className="flex justify-center py-6 md:py-8">
            <p className={`font-light text-white text-sm sm:text-base md:text-lg lg:text-xl text-center [font-family:'Inter',Helvetica] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
