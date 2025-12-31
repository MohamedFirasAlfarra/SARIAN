import { Button } from "../../../components/ui/button";
import { useLanguage } from "../../../contexts/LanguageContext";

export const PartnerInvitationSection = (): JSX.Element => {
  const { t, language } = useLanguage();

  return (
    <section
      className="relative mt-20 w-full bg-[#FFD400] pt-24 pb-48 lg:pt-40 lg:pb-60 overflow-hidden"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
      }}
    >
      {/* Decorative background icons */}
      <div className="absolute top-[-5%] right-[-5%] opacity-10 rotate-45 pointer-events-none">
        <div className="w-48 h-48 border-[12px] border-black rounded-3xl" />
      </div>
      <div className="absolute top-[10%] left-[-10%] opacity-10 -rotate-12 pointer-events-none">
        <div className="w-64 h-64 border-[12px] border-black rounded-full" />
      </div>
      <div className="absolute bottom-[20%] right-[10%] opacity-10 rotate-12 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="black" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="5" fill="black" />
          <circle cx="50" cy="20" r="5" fill="black" />
          <circle cx="80" cy="20" r="5" fill="black" />
          <circle cx="20" cy="50" r="5" fill="black" />
          <circle cx="50" cy="50" r="5" fill="black" />
          <circle cx="80" cy="50" r="5" fill="black" />
          <circle cx="20" cy="80" r="5" fill="black" />
          <circle cx="50" cy="80" r="5" fill="black" />
          <circle cx="80" cy="80" r="5" fill="black" />
        </svg>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-12 lg:gap-20 ${language === 'ar' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

        {/* Content Side */}
        <div className={`flex flex-col gap-6 md:gap-8 max-w-xl items-center text-center ${language === 'ar' ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
          <h1 className="text-[#0D1B42] text-4xl sm:text-5xl md:text-6xl font-black [font-family:Inter,sans-serif] leading-tight tracking-tight">
            {language === 'ar' ? 'انضم كشريك في SARIAN' : 'Join as a Partner in SARIAN'}
          </h1>

          <p className="text-[#0D1B42] text-lg sm:text-xl md:text-2xl font-medium [font-family:Inter,sans-serif] leading-relaxed opacity-95">
            {language === 'ar'
              ? 'هل تمتلك مطعماً، متجراً، أو مشروعاً صغيراً؟ تطبيق SARIAN هو بوابتك للوصول إلى آلاف العملاء الجدد وزيادة مبيعاتك بسهولة!'
              : 'Do you own a restaurant, store, or small business? SARIAN app is your gateway to reach thousands of new customers and increase your sales easily!'
            }
          </p>

          <Button className="h-16 px-12 bg-white hover:bg-white/90 text-[#FFD400] rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 font-extrabold text-xl sm:text-2xl mt-4">
            {language === 'ar' ? 'انضم إلينا' : 'Join Us'}
          </Button>
        </div>

        {/* Image Side */}
        <div className="relative w-full max-w-[450px] lg:max-w-[536px] ">
           <div className="w-full lg:min-w-[436px] lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
        <img
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[536px] h-auto object-cover"
          alt="Vector"
          src="https://c.animaapp.com/mjtprqtwg1cmix/img/vector-6.svg"
        />
      </div>
        </div>
      </div>
    </section>
  );
};
