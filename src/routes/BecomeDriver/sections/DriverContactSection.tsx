import { useLanguage } from "../../../contexts/LanguageContext";
import { Mail, MessageSquare } from "lucide-react";

export const DriverContactSection = () => {
    const { t, language } = useLanguage();

    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-20">
                <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
                    <div className={`flex-1 flex items-center gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#FFD400] transition-colors group ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="p-4 bg-white rounded-2xl shadow-sm text-[#0d1b42] group-hover:bg-[#FFD400] transition-colors">
                            <Mail className="w-8 h-8" />
                        </div>
                        <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <p className="text-gray-500 text-sm mb-1">{t('driver.contact.email').split(':')[0]}:</p>
                            <p className="text-[#0d1b42] font-bold text-lg">driver@sarian.ma</p>
                        </div>
                    </div>

                    <div className={`flex-1 flex items-center gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#FFD400] transition-colors group ${language === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="p-4 bg-white rounded-2xl shadow-sm text-[#0d1b42] group-hover:bg-[#FFD400] transition-colors">
                            <MessageSquare className="w-8 h-8" />
                        </div>
                        <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <p className="text-[#0d1b42] font-bold text-lg leading-tight">
                                {t('driver.contact.app')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
