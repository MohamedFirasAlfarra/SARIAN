
import { useState } from "react";
import { X, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const MobileAppBanner = (): JSX.Element | null => {
    const [isVisible, setIsVisible] = useState(true);
    const { language } = useLanguage();

    if (!isVisible) return null;

    return (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-[#3a3a3a] shadow-lg">
            <div className="flex items-center justify-between px-4 py-3 gap-3">
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-shrink-0 p-1 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close banner"
                >
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Logo and Text */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <img
                        src="https://c.animaapp.com/mj5q34e29K0n2Q/img/logo-sarian2-1.png"
                        alt="SARIAN Logo"
                        className="w-12 h-12 rounded-xl flex-shrink-0 object-cover"
                    />
                    <div className="flex flex-col min-w-0">
                        <span className="font-bold text-white text-base leading-tight">
                            SARIAN
                        </span>
                        <span className="font-normal text-white/80 text-xs leading-tight truncate">
                            {language === 'ar' ? 'طعام، توصيل وأكثر!' : 'Food, Delivery and more!'}
                        </span>
                    </div>
                </div>

                {/* Download Button */}
                <a
                    href="#"
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
                >
                    <span className="font-semibold text-white text-sm whitespace-nowrap">
                        {language === 'ar' ? 'حمل التطبيق' : 'Download App'}
                    </span>
                    <Download className="w-4 h-4 text-white" />
                </a>
            </div>
        </div>
    );
};
