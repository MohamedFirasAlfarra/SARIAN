import { useLanguage } from "../../../contexts/LanguageContext";

export const DriverRequirementsSection = () => {
    const { language } = useLanguage();

    const requirements = [
        {
            titleAr: "دراجة نارية",
            titleEn: "Motorcycle",
            icon: (
                <svg width="60" height="60" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 32C12.7614 32 15 29.7614 15 27C15 24.2386 12.7614 22 10 22C7.23858 22 5 24.2386 5 27C5 29.7614 7.23858 32 10 32Z" stroke="black" strokeWidth="2.5" fill="#FFD400" />
                    <path d="M34 32C36.7614 32 39 29.7614 39 27C39 24.2386 36.7614 22 34 22C31.2386 22 29 24.2386 29 27C29 29.7614 31.2386 32 34 32Z" stroke="black" strokeWidth="2.5" fill="#FFD400" />
                    <path d="M10 27L15 15H29L34 27" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 15L12 10H8" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="20" y="10" width="12" height="6" rx="2" fill="#FFD400" stroke="black" strokeWidth="2" />
                    <path d="M34 22V18H38L39 22" stroke="black" strokeWidth="2" fill="#FFD400" />
                </svg>
            )
        },
        {
            titleAr: "هاتف ذكي",
            titleEn: "Smartphone",
            icon: (
                <svg width="60" height="60" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12" y="6" width="20" height="32" rx="4" stroke="black" strokeWidth="2.5" />
                    <rect x="15" y="9" width="14" height="22" rx="2" fill="#FFD400" opacity="0.2" />
                    <circle cx="22" cy="34" r="1.5" fill="black" />
                    <rect x="18" y="33" width="8" height="2" rx="1" stroke="black" strokeWidth="1" />
                    <path d="M15 12H29" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="17" cy="18" r="1.5" fill="#FFD400" stroke="black" strokeWidth="1" />
                    <circle cx="22" cy="18" r="1.5" fill="white" stroke="black" strokeWidth="1" />
                    <circle cx="27" cy="18" r="1.5" fill="white" stroke="black" strokeWidth="1" />
                    <circle cx="17" cy="23" r="1.5" fill="white" stroke="black" strokeWidth="1" />
                    <circle cx="22" cy="23" r="1.5" fill="white" stroke="black" strokeWidth="1" />
                    <circle cx="27" cy="23" r="1.5" fill="white" stroke="black" strokeWidth="1" />
                </svg>
            )
        },
        {
            titleAr: "اتصال بالإنترنت",
            titleEn: "Internet Connection",
            icon: (
                <svg width="60" height="60" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18C13.5 14.5 18.5 13.5 22 13.5C25.5 13.5 30.5 14.5 34 18" stroke="#FFD400" strokeWidth="4" strokeLinecap="round" />
                    <path d="M14 23C16.5 20.5 20 19.5 22 19.5C24 19.5 27.5 20.5 30 23" stroke="black" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M18 28C19.5 26.5 21 26 22 26C23 26 24.5 26.5 26 28" stroke="black" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="22" cy="33" r="3" fill="#FFD400" stroke="black" strokeWidth="1.5" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative w-full overflow-hidden pb-32 mt-[-8vw]">
            <div
                className="absolute inset-0 bg-[#F9F5F0]"
                style={{
                    clipPath: "polygon(0 0, 100% 8vw, 100% 100%, 0 calc(100% - 8vw))",
                }}
            />

            <div className="container relative z-10 mx-auto px-4 pt-40 pb-24">
                <h2 className="text-3xl md:text-3xl font-bold text-center text-[#0D1B42] mb-12 [font-family: Georgia, 'Times New Roman', Times, serif]">
                    {language === 'ar' ? 'كل ما تحتاجه' : 'All You Need'}
                </h2>

                <div className="flex flex-col md:flex-row items-center md:justify-center gap-12 md:gap-12">
                    {requirements.map((req, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <div
                                className="w-[85vw] max-w-[170px] h-32 md:w-52 md:h-40 bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-transform hover:scale-105"
                                style={{
                                    borderRadius: "35px",
                                    transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"
                                }}>
                                <div className="scale-[1.6] md:scale-125">
                                    {req.icon}
                                </div>
                            </div>
                            <span className="text-[#0D1B42] font-bold text-xl md:text-2xl [font-family: Georgia, 'Times New Roman', Times, serif] mt-2">
                                {language === 'ar' ? req.titleAr : req.titleEn}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
