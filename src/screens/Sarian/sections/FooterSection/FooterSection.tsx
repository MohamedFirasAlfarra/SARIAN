import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import bgFooterSection from "../../../../assets/bgFooterSection.jpeg";

export const FooterSection = (): JSX.Element => {
  const { t, language, setLanguage } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);

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

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const navSections = [
    { id: 'cities', title: t('footer.cities'), items: cities },
    { id: 'restaurants', title: t('footer.restaurants'), items: restaurants },
    { id: 'foods', title: t('footer.restaurants'), items: foods },
    { id: 'services', title: t('footer.services'), items: services },
  ];

  return (
    <footer
      style={{ backgroundImage: `url(${bgFooterSection})` }}
      className="relative w-full 
    bg-cover bg-center overflow-hidden">
      <div className="w-full h-full absolute inset-0 z-0" />

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden relative z-10 w-full px-4 md:px-8 py-8 md:py-12">
        {/* Top Section: Logo + App Buttons */}
        <div className="flex flex-col items-center gap-6 mb-8 md:mb-10">
          <div className="w-[120px] md:w-[160px] animate-bounce-slow">
            <img
              className="h-auto rounded-[20px] w-full object-cover shadow-2xl hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] transition-all duration-300 hover:scale-105"
              alt="Logo"
              src="https://c.animaapp.com/mj5q34e29K0n2Q/img/logo-sarian2-1.png"
            />
          </div>

          <div className="flex flex-row gap-3 md:gap-4">
            <a
              href="#"
              className="w-[110px] md:w-[122px] h-[44px] md:h-[49px] rounded-[15px] border border-solid border-black [background:url(https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-3-1.png)_50%_50%_/_cover] hover:opacity-80 transition-opacity"
            />
            <a
              href="#"
              className="w-[118px] md:w-[130px] h-[44px] md:h-[49px] rounded-[15px] border border-solid border-black [background:url(https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-4-1.png)_50%_50%_/_cover] hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        <Separator className="w-full bg-white/20 mb-6 md:mb-8" />

        {/* Accordion Navigation */}
        <div className="mb-8 md:mb-10">
          <div className="space-y-3" dir={language === 'ar' ? "rtl" : "ltr"}>
            {navSections.map((section) => (
              <div key={section.id} className="border border-white/20 rounded-lg overflow-hidden bg-white/5">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-medium text-base md:text-lg">{section.title}</h3>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${openSection === section.id ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-4 pb-3 pt-1 flex flex-col gap-2">
                    {section.items.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-white/80 text-sm md:text-base hover:text-white transition-colors py-1"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="w-full bg-white/20 mb-6 md:mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-6">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <a href="#" className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110">
              <FaFacebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] transition-all duration-300 hover:scale-110">
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1DA1F2] transition-all duration-300 hover:scale-110">
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110">
              <FaLinkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="group relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 hover:scale-110">
              <FaYoutube className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center items-center gap-3 md:gap-4" dir={language === 'ar' ? "rtl" : "ltr"}>
            {footerLinks.map((link, index) => (
              <a key={index} href="#" className="font-medium text-[#c7c7c7] text-sm md:text-base text-center hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              className="w-[140px] md:w-[156px] h-[56px] md:h-[63px] bg-[#333333] rounded-[20px] hover:bg-[#444444] transition-colors flex items-center justify-center gap-2"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              <img className="w-4 h-4" alt="Vector" src="https://c.animaapp.com/mj5q34e29K0n2Q/img/vector-8.svg" />
              <img className="w-6 h-6 md:w-7 md:h-7 object-cover" alt="Ellipse" src="https://c.animaapp.com/mj5q34e29K0n2Q/img/ellipse-1.png" />
              <span className="[font-family: Georgia, 'Times New Roman', Times, serif] font-normal text-white text-lg md:text-xl">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Old Design) */}
      <div className="hidden lg:block relative z-10 w-full px-20 py-16">
        <div className="flex flex-row justify-between items-start gap-8">
          {/* Language Toggle (Left) */}
          <div className="flex flex-col gap-8 items-start w-auto">
            <Button
              variant="secondary"
              className="w-[156px] h-[63px] bg-[#333333] rounded-[20px] hover:bg-[#444444] transition-colors flex items-center justify-center gap-2"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            >
              <img className="w-4 h-4" alt="Vector" src="https://c.animaapp.com/mj5q34e29K0n2Q/img/vector-8.svg" />
              <img className="w-7 h-7 object-cover" alt="Ellipse" src="https://c.animaapp.com/mj5q34e29K0n2Q/img/ellipse-1.png" />
              <span className={`[font-family: Georgia, 'Times New Roman', Times, serif] font-normal text-white text-xl ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </Button>
          </div>

          {/* Navigation Grid (Center) */}
          <div className="flex-1">
            <nav className={`grid grid-cols-4 gap-8 ${language === 'ar' ? 'justify-items-end' : 'justify-items-start'}`} dir={language === 'ar' ? "rtl" : "ltr"}>
              <div className={`flex flex-col gap-4 ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                <h3 className="font-medium text-white text-xl tracking-[0] leading-[normal]">{t('footer.cities')}</h3>
                <div className="flex flex-col gap-2">
                  {cities.map((city, index) => (
                    <a key={index} href="#" className="font-normal text-white/80 text-base hover:text-white transition-colors">{city}</a>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-4 ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                <h3 className="font-medium text-white text-xl tracking-[0] leading-[normal]">{t('footer.restaurants')}</h3>
                <div className="flex flex-col gap-2">
                  {restaurants.map((restaurant, index) => (
                    <a key={index} href="#" className="font-normal text-white/80 text-base hover:text-white transition-colors">{restaurant}</a>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-4 ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                <h3 className="font-medium text-white text-xl tracking-[0] leading-[normal]">{t('footer.restaurants')}</h3>
                <div className="flex flex-col gap-2">
                  {foods.map((food, index) => (
                    <a key={index} href="#" className="font-normal text-white/80 text-base hover:text-white transition-colors">{food}</a>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col gap-4 ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                <h3 className="font-medium text-white text-xl tracking-[0] leading-[normal]">{t('footer.services')}</h3>
                <div className="flex flex-col gap-2">
                  {services.map((service, index) => (
                    <a key={index} href="#" className="font-normal text-white/80 text-base hover:text-white transition-colors">{service}</a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Logo + App Buttons (Right) */}
          <div className="flex flex-col items-center gap-5 w-auto">
            <div className="w-[200px] p-2.5 animate-bounce-slow">
              <img
                className="h-auto rounded-[20px] w-full object-cover shadow-2xl hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] transition-all duration-300 hover:scale-105"
                alt="Logo"
                src="https://c.animaapp.com/mj5q34e29K0n2Q/img/logo-sarian2-1.png"
              />
            </div>

            <div className="flex flex-col gap-4">
              <a href="#" className="w-[122px] h-[49px] rounded-[15px] border border-solid border-black [background:url(https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-3-1.png)_50%_50%_/_cover] hover:opacity-80 transition-opacity" />
              <a href="#" className="w-[130px] h-[49px] rounded-[15px] border border-solid border-black [background:url(https://c.animaapp.com/mj5q34e29K0n2Q/img/frame-4-1.png)_50%_50%_/_cover] hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col items-center gap-8">
          <Separator className="w-full bg-white/20" />

          <div className="flex flex-row justify-between items-center w-full gap-8">
            <div className="flex items-center gap-4">
              <a href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/50">
                <FaFacebook className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                <FaInstagram className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#1DA1F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1DA1F2]/50">
                <FaTwitter className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/50">
                <FaLinkedin className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>
              <a href="#" className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FF0000] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/50">
                <FaYoutube className="w-6 h-6 text-white transition-transform group-hover:scale-110" />
              </a>
            </div>

            <nav className="flex flex-wrap justify-center items-center gap-8" dir={language === 'ar' ? "rtl" : "ltr"}>
              {footerLinks.map((link, index) => (
                <a key={index} href="#" className="font-medium text-[#c7c7c7] text-lg text-center hover:text-white transition-colors">
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
