import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export const FooterSection = (): JSX.Element => {
  const { t, language, setLanguage } = useLanguage();

  const cities = [
    t('footer.cities.damascus'),
    t('footer.cities.daraa'),
    t('footer.cities.homs'),
    t('footer.cities.tartus'),
    t('footer.cities.aleppo'),
  ];

  const restaurants = [
    "Moojood",
    "دار الناجي",
    "SuchiHouse",
    "Capanna",
    "dipndip",
  ];

  const foods = [
    t('footer.foods.syrian'),
    t('footer.foods.asian'),
    t('footer.foods.italian'),
    t('footer.foods.desserts'),
    t('footer.foods.syrian'),
  ];

  const services = [
    t('footer.services.food'),
    t('footer.services.flowers'),
    t('footer.services.chocolate'),
    t('footer.services.grocery'),
    t('footer.services.gift'),
  ];

  const footerLinks = [
    t('footer.links.about'),
    t('footer.links.contact'),
    t('footer.links.how'),
    t('footer.links.terms'),
    t('footer.links.privacy'),
  ];

  return (
    <footer className="relative w-full  h-[1400px]  md:py-96 lg:py-00
    bg-[url(https://c.animaapp.com/mj5q34e29K0n2Q/img/background.svg)]
     bg-cover bg-center overflow-hidden">
      <div className="w-full h-full  absolute inset-0 z-0" />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-20 pt-24 md:pt-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">

          <div className="flex flex-col gap-8 order-3 lg:order-1 items-center lg:items-start w-full lg:w-auto">
            <Button
              variant="secondary"
              className="w-[156px] h-[63px] bg-[#333333] rounded-[20px] hover:bg-[#444444] transition-colors flex items-center justify-center gap-2"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              <img
                className="w-4 h-4"
                alt="Vector"
                src="https://c.animaapp.com/mj5q34e29K0n2Q/img/vector-8.svg"
              />
              <img
                className="w-7 h-7 object-cover"
                alt="Ellipse"
                src="https://c.animaapp.com/mj5q34e29K0n2Q/img/ellipse-1.png"
              />
              <span className={`[font-family:'Inter',Helvetica] font-normal text-white text-xl ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 w-full order-2 lg:order-2">
            <nav className={`grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center ${language === 'ar' ? 'lg:justify-items-end' : 'lg:justify-items-start'}`} dir={language === 'ar' ? "rtl" : "ltr"}>
              <div className={`flex flex-col gap-4 items-center ${language === 'ar' ? 'lg:items-start lg:text-right' : 'lg:items-start lg:text-left'} text-center`}>
                <h3 className="font-medium text-white text-2xl tracking-[0] leading-[normal]">
                  {t('footer.cities')}
                </h3>
                <div className="flex flex-col gap-2">
                  {cities.map((city, index) => (
                    <a key={index} href="#" className="font-normal text-white text-lg hover:text-gray-300 transition-colors">
                      {city}
                    </a>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-4 items-center ${language === 'ar' ? 'lg:items-start lg:text-right' : 'lg:items-start lg:text-left'} text-center`}>
                <h3 className="font-medium text-white text-2xl tracking-[0] leading-[normal]">
                  {t('footer.restaurants')}
                </h3>
                <div className="flex flex-col gap-2">
                  {restaurants.map((restaurant, index) => (
                    <a key={index} href="#" className="font-normal text-white text-lg hover:text-gray-300 transition-colors">
                      {restaurant}
                    </a>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-4 items-center ${language === 'ar' ? 'lg:items-start lg:text-right' : 'lg:items-start lg:text-left'} text-center`}>
                <h3 className="font-medium text-white text-2xl tracking-[0] leading-[normal]">
                  {t('footer.restaurants')}
                </h3>
                <div className="flex flex-col gap-2">
                  {foods.map((food, index) => (
                    <a key={index} href="#" className="font-normal text-white text-lg hover:text-gray-300 transition-colors">
                      {food}
                    </a>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-4 items-center ${language === 'ar' ? 'lg:items-start lg:text-right' : 'lg:items-start lg:text-left'} text-center`}>
                <h3 className="font-medium text-white text-2xl tracking-[0] leading-[normal]">
                  {t('footer.services')}
                </h3>
                <div className="flex flex-col gap-2">
                  {services.map((service, index) => (
                    <a key={index} href="#" className="font-normal text-white text-lg hover:text-gray-300 transition-colors">
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* App Store / Logo */}
          <div className="flex flex-col items-center gap-5 order-1 lg:order-3 w-full lg:w-auto">
            <div className="w-[200px] lg:w-[253px] p-2.5 animate-bounce-slow">
              <img
                className="h-auto rounded-[20px] w-full object-cover shadow-2xl hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] transition-all duration-300 hover:scale-105"
                alt="Logo"
                src="https://c.animaapp.com/mj5q34e29K0n2Q/img/logo-sarian2-1.png"
              />
            </div>

            <div className="flex flex-row lg:flex-col gap-4">
              <a
                href="#"
                className="w-[122px] h-[49px] rounded-[15px] border border-solid border-black [background:url(https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-3-1.png)_50%_50%_/_cover] hover:opacity-80 transition-opacity"
              />
              <a
                href="#"
                className="w-[130px] h-[49px] rounded-[15px] border border-solid border-black [background:url(https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-4-1.png)_50%_50%_/_cover] hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 flex flex-col items-center gap-8">
          <Separator className="w-full bg-white/20" />

          <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-8">
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/50"
              >
                <FaFacebook className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50"
              >
                <FaInstagram className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1DA1F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1DA1F2]/50"
              >
                <FaTwitter className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/50"
              >
                <FaLinkedin className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/50"
              >
                <FaYoutube className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>
            </div>

            <nav className="flex flex-wrap justify-center items-center gap-4 lg:gap-8" dir={language === 'ar' ? "rtl" : "ltr"}>
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-medium text-[#c7c7c7] text-base lg:text-xl text-center hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <Separator className="w-full bg-white/20" />

        </div>
      </div>
    </footer>
  );
};
