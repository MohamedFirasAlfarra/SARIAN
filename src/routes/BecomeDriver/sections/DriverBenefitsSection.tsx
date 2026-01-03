import { Card, CardContent } from "../../../components/ui/card";
import { useLanguage } from "../../../contexts/LanguageContext";

export const DriverBenefitsSection = (): JSX.Element => {
    const { language } = useLanguage();

    const features = [
        {
            icon: (
                <svg width="70" height="70" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="8" width="32" height="28" rx="4" fill="#FFD400" stroke="black" strokeWidth="2.5" />
                    <path d="M6 16H38" stroke="black" strokeWidth="2.5" />
                    <circle cx="12" cy="22" r="2" fill="black" />
                    <circle cx="22" cy="22" r="2" fill="black" />
                    <circle cx="32" cy="22" r="2" fill="white" stroke="black" strokeWidth="1" />
                    <circle cx="12" cy="30" r="2" fill="black" />
                    <circle cx="22" cy="30" r="2" fill="black" />
                    <path d="M13 5V11" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M31 5V11" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
            titleAr: "اختر ساعات عملك بنفسك",
            titleEn: "Choose your own working hours"
        },
        {
            icon: (
                <svg width="70" height="70" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 28V11L17 7L27 11L36 7V24L27 28L17 24L8 28Z" fill="#FFD400" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
                    <circle cx="22" cy="15" r="5" fill="white" stroke="black" strokeWidth="2.5" />
                    <path d="M22 20V24" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
            titleAr: "اشتغل من أي مدينة",
            titleEn: "Work from any city"
        },
        {
            icon: (
                <svg width="70" height="70" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21C7 12.7 13.7 6 22 6C30.3 6 37 12.7 37 21" stroke="black" strokeWidth="3" strokeLinecap="round" />
                    <rect x="5" y="20" width="7" height="10" rx="2" fill="#FFD400" stroke="black" strokeWidth="2.5" />
                    <rect x="32" y="20" width="7" height="10" rx="2" fill="#FFD400" stroke="black" strokeWidth="2.5" />
                    <path d="M35 30C35 34.5 31.5 37 27 37" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
            titleAr: "دعم تقني مستمر من فريقنا",
            titleEn: "Continuous technical support from our team"
        },
        {
            icon: (
                <svg width="70" height="70" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 6C15.5 6 11 10.5 11 17C11 23.5 15.5 28 22 28C28.5 28 33 23.5 33 17C33 10.5 28.5 6 22 6Z" fill="#FFD400" stroke="black" strokeWidth="2.5" />
                    <path d="M22 10V12" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M22 22V24" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="22" cy="17" r="5" fill="white" stroke="black" strokeWidth="2.5" />
                    <path d="M22 14.5V19.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M19.5 17H24.5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M14 6C14 4.5 16 3 22 3C28 3 30 4.5 30 6" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M16 28C16 28 15 29.5 15 32C15 34.5 18 36 22 36C26 36 29 34.5 29 32C29 29.5 28 28 28 28" fill="#FFD400" stroke="black" strokeWidth="2.5" />
                </svg>
            ),
            titleAr: "دخل مضمون وفرص مكافآت شهرية",
            titleEn: "Guaranteed income and monthly reward opportunities"
        },
    ];

    return (
        <section className="w-full flex justify-center py-12 my-14 md:py-24 bg-white px-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-6xl w-full">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className="
              border border-gray-300
              rounded-[15px]
              bg-white
              shadow-none
              transition-all
              duration-300
              hover:shadow-lg
              flex flex-col
              items-center
              justify-center
              w-[calc(50%-8px)]
              sm:w-[calc(33.33%-16px)]
              md:w-[calc(33.33%-22px)]
              lg:w-[calc(25%-24px)]
              h-48 md:h-56
              flex-shrink-0
            ">
                        <CardContent className={`flex flex-col ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'} justify-center gap-4 py-6 px-6 w-full h-full`}>
                            <div className="h-[60px] md:h-[80px] flex items-center">
                                {feature.icon}
                            </div>
                            <p className="text-[#0D1B42] font-bold text-2xl md:text-xl leading-tight tracking-tight [font-family: Georgia, 'Times New Roman', Times, serif] w-full">
                                {language === "ar" ? feature.titleAr : feature.titleEn}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
