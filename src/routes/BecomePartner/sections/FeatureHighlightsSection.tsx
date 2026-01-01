import { Card, CardContent } from "../../../components/ui/card";
import { useLanguage } from "../../../contexts/LanguageContext";

export const FeatureHighlightsSection = (): JSX.Element => {
  const { language } = useLanguage();

  const features = [
    {
      titleAr: "تقارير وأرقام\nلمساعدتك على التطور",
      titleEn: "Reports and Analytics\nto Help You Grow",
      icon: "analytics",
    },
    {
      titleAr: "دعم تسويقي لعلامتك\nالتجارية",
      titleEn: "Marketing Support\nfor Your Brand",
      icon: "marketing",
    },
    {
      titleAr: "تواجد رقمي احترافي\nداخل تطبيق Done",
      titleEn: "Professional Digital Presence\nInside Done App",
      icon: "mobile",
    },
    {
      titleAr: "التوصيل السريع\nلمنتجاتك",
      titleEn: "Fast Delivery\nfor Your Products",
      icon: "delivery",
    },
    {
      titleAr: "لوحة تحكم لإدارة\nالطلبات والمبيعات",
      titleEn: "Dashboard to Manage\nOrders and Sales",
      icon: "dashboard",
    },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "analytics":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="13" width="4" height="7" rx="1" stroke="#0D1B42" strokeWidth="1.5" />
            <rect x="10" y="9" width="4" height="11" rx="1" fill="#FFD400" />
            <rect x="17" y="5" width="4" height="15" rx="1" stroke="#0D1B42" strokeWidth="1.5" />
          </svg>
        );
      case "marketing":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" fill="#FFD400" stroke="#0D1B42" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M15.5 8.5C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 15.5 15.5" stroke="#0D1B42" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19 5C21 7 22 9.5 22 12C22 14.5 21 17 19 19" stroke="#0D1B42" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case "mobile":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="2" width="14" height="20" rx="3" stroke="#0D1B42" strokeWidth="1.5" />
            <rect x="8" y="5" width="3" height="3" rx="1" fill="#FFD400" />
            <rect x="13" y="5" width="3" height="3" rx="1" stroke="#0D1B42" strokeWidth="1.5" />
            <rect x="8" y="10" width="3" height="3" rx="1" stroke="#0D1B42" strokeWidth="1.5" />
            <rect x="13" y="10" width="3" height="3" rx="1" fill="#FFD400" />
            <rect x="8" y="15" width="8" height="2" rx="1" stroke="#0D1B42" strokeWidth="1.5" />
          </svg>
        );
      case "delivery":
        return (
          <svg width="80" height="60" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10H14M14 10V16H6V10ZM14 10L20 12V16H14" stroke="#0D1B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6H8" stroke="#0D1B42" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9" cy="18" r="3" fill="#FFD400" stroke="#0D1B42" strokeWidth="1.5" />
            <circle cx="19" cy="18" r="3" fill="#FFD400" stroke="#0D1B42" strokeWidth="1.5" />
            <path d="M22 12L25 12L27 15V18H22" stroke="#0D1B42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "dashboard":
        return (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="7" height="7" rx="1" stroke="#0D1B42" strokeWidth="1.5" />
            <circle cx="17.5" cy="7.5" r="3.5" fill="#FFD400" stroke="#0D1B42" strokeWidth="1.5" />
            <path d="M17.5 13L21 19H14L17.5 13Z" stroke="#0D1B42" strokeWidth="1.5" strokeLinejoin="round" />
            <rect x="4" y="15" width="7" height="5" rx="1" fill="#FFD400" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full flex justify-center py-12 md:py-24 bg-white px-4">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="
              border border-[#E5E7EB]
              rounded-[20px]
              bg-white
              shadow-none
              transition-all
              duration-300
              hover:shadow-lg
              flex flex-col
              items-center
              justify-center
              
              /* Adaptive widths for a systematic layout */
              w-[calc(50%-8px)]               /* 2 cards per row on mobile (gap-4) */
              sm:w-[calc(33.33%-16px)]        /* 3 cards per row on small tablets (gap-4) */
              md:w-[calc(33.33%-22px)]        /* 3 cards per row on medium screens (gap-8) */
              lg:w-[calc(25%-24px)]           /* 4 cards per row on large screens (gap-8) */
              
              /* Fixed height for uniformity as requested */
              h-44 md:h-52
              flex-shrink-0
            "
          >
            <CardContent className="flex flex-col items-center justify-center text-center gap-6 py-6 px-4 w-full h-full">
              <div className="h-[60px] md:h-[80px] flex items-center justify-center">
                {renderIcon(feature.icon)}
              </div>

              <p className="text-[#0D1B42] font-semibold text-[13px] md:text-[15px] leading-tight whitespace-pre-line tracking-tight px-2">
                {language === "ar" ? feature.titleAr : feature.titleEn}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
