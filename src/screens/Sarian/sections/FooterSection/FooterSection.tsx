import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaSnapchat, FaTiktok } from "react-icons/fa";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import logopng from '../../../../assets/logo.png' ;
import appstore from '../../../../assets/appstore.png' ;
import googleplay from '../../../../assets/googleplay.png' ;

export const FooterSection = (): JSX.Element => {
  const { t, language, setLanguage } = useLanguage();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const cities = [
    t('footer.cities.rabat'),
    t('footer.cities.casablanca'),
    t('footer.cities.tangier'),
    t('footer.cities.agadir'),
    t('footer.cities.fes'),
    t('footer.cities.marrakech'),
  ];

  const restaurants = [
    t('footer.restaurants.moojood'),
    t('footer.restaurants.darnaji'),
    t('footer.restaurants.suchihouse'),
    t('footer.restaurants.ayumuk'),
    t('footer.restaurants.capanna'),
    t('footer.restaurants.dipndip'),
  ];

  const foods = [
    t('footer.foods.moroccan'),
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
    t('footer.services.pharmacy'),
  ];

  const footerLinksBottom = [
    t('footer.links.about'),
    t('footer.links.contact'),
    t('footer.links.blog'),
    t('footer.links.how'),
    t('footer.links.review'),
    t('footer.links.terms'),
    t('footer.links.privacy'),
    t('footer.links.security'),
    t('footer.links.cookies'),
  ];

  const navSections = [
    { id: 'services', title: t('footer.services'), items: services },
    { id: 'foods', title: t('footer.cuisines'), items: foods },
    { id: 'restaurants', title: t('footer.restaurants'), items: restaurants },
    { id: 'cities', title: t('footer.cities'), items: cities },
  ];


  return (
    <footer className="relative w-full overflow-hidden pt-16 pb-10">
      <div
        className="absolute inset-0 bg-[#333333] z-0"
        style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:hidden gap-8 items-center w-full mb-10">          
            <img src={logopng}
             alt="Logo" className="w-40 h-3w-40 rounded-xl  object-contain invert-[.1]" />
          <Separator className="bg-white" />

          <div className="w-full flex flex-col">
            {navSections.map((section) => (
              <div key={section.id} className="border-b border-white w-full">
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full py-4 flex items-center justify-between text-gray-300 font-semibold text-[13px] ${language === 'ar' ? 'flex-row' : ''}`}
                >
                  <span>{section.title}</span>
                  {openSections[section.id] ? <ChevronUp className="w-5 h-5 opacity-50" /> : <ChevronDown className="w-5 h-5 opacity-50" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSections[section.id] ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                  <div className={`flex flex-col gap-3 ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                    {section.items.map((item, idx) => (
                      <a key={idx} href="#" className="text-white/70 hover:text-white transition-colors text-[12px]">{item}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-4 mt-4">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl border border-white/20 hover:bg-black/80 transition-all">
              <img  src={appstore} alt="App Store" className="w-28 h-15" />
            
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl border border-white/20 hover:bg-black/80 transition-all">
              <img src={googleplay} alt="Google Play" className="w-28 h-15" />
            
            </button>
          </div>
        </div>

        <div className={`hidden lg:flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between ${language === 'ar' ? 'lg:flex-row' : ''}`}>
          <div className={`flex flex-col items-center lg:items-end gap-6 w-full lg:w-1/4 ${language === 'ar' ? 'lg:items-start' : 'lg:items-start'}`}>        
              <img src={logopng} alt="Logo" className="w-40 h-3w-40 rounded-xl  object-contain invert-[.1]" />
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-xl border border-white/20 hover:bg-black/80 transition-all w-[160px]">
                  <img  src={appstore} alt="App Store" className="w-36 h-15" />
              </button>
              <button className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-xl border border-white/20 hover:bg-black/80 transition-all w-[160px]">
              <img src={googleplay} alt="Google Play" className="w-36 h-15" />
              </button>
            </div>
          </div>  

          <div className="flex-1">
            <div className={`grid grid-cols-4 gap-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {navSections.map((section) => (
                <div key={section.id} className="flex flex-col gap-5">
                  <h3 className="text-white/60 font-medium text-xs sm:text-sm uppercase tracking-wider">{section.title}</h3>
                  <div className="flex flex-col gap-3">
                    {section.items.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-white text-[13px] sm:text-[15px] font-bold hover:text-[#FFD400] transition-colors leading-tight">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`w-full lg:w-auto flex justify-center lg:block ${language === 'ar' ? 'lg:order-last' : ''}`}>
            <Button
              variant="outline"
              className="bg-[#444444] border-0 text-white rounded-full px-6 py-6 flex items-center gap-3 hover:bg-[#555555] transition-all"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}>
              <div className="bg-[#FF4B2B] p-1.5 rounded-full">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-base">{language === 'ar' ? 'العربية' : 'English'}</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Button>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${language === 'ar' ? 'md:flex-row-reverse' : ''}`}>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaTwitter size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaLinkedin size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaFacebook size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaSnapchat size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaTiktok size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaInstagram size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-all"><FaYoutube size={20} /></a>
          </div>

          <div className={`flex flex-wrap justify-center gap-x-6 gap-y-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {footerLinksBottom.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="text-white/50 text-xs sm:text-[13px] hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/30 text-[11px] sm:text-xs">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
