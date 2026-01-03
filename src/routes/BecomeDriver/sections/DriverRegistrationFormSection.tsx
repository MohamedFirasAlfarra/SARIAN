import { useLanguage } from "../../../contexts/LanguageContext";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../../../components/ui/select";
import { useState } from "react";
import { ChevronLeft, Mail, Headset, ChevronRight } from "lucide-react";

export const DriverRegistrationFormSection = () => {
    const { t, language } = useLanguage();
    const [license, setLicense] = useState<string>('yes');
    const [insurance, setInsurance] = useState<string>('yes');

    const contactButtons = [
        {
            textAr: "راسلنا عبر البريد: contact@sarian.ma",
            textEn: "Email us at: contact@sarian.ma",
            icon: <Mail className="w-6 h-6 text-[#FFD400]" />,
            value: "contact@sarian.ma"
        },
        {
            textAr: "تواصل معنا عبر الدعم داخل التطبيق",
            textEn: "Contact us via in-app support",
            icon: <Headset className="w-6 h-6 text-[#FFD400]" />,
            value: null
        },
    ];

    return (
        <section id="registration-form" className="w-full py-20 relative overflow-hidden mt-[-8vw]">
            <div
                className="absolute inset-0 bg-[#333333]"
                style={{
                    clipPath: "polygon(0 0, 100% 8vw, 100% 100%, 0 100%)",
                }}
            />
            <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-20 max-w-3xl pt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6 [font-family: Georgia, 'Times New Roman', Times, serif]">
                        {t('driver.form.title')}
                    </h2>
                    <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-bold">
                        {language === 'ar'
                            ? 'هل ترغب في الانضمام إلى SARIAN كمندوب توصيل؟ املأ النموذج التالي وسيتواصل معك فريقنا في أقرب وقت لإنهاء الإجراءات وبدأ العمل.'
                            : 'Do you want to join SARIAN as a delivery representative? Fill out the following form and our team will contact you as soon as possible to complete the procedures and start work.'
                        }
                    </p>
                </div>

                <div className="space-y-8">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <Label htmlFor="fullname" className="text-white text-sm font-bold block">
                                {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="fullname"
                                type="text"
                                placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                                className="bg-white border-none text-gray-800 h-14 rounded-xl focus:ring-2 focus:ring-[#FFD400] placeholder:text-gray-400 text-right"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white text-sm font-bold block">
                                {t('driver.form.email')} <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={t('driver.form.email')}
                                className="bg-white border-none text-gray-800 h-14 rounded-xl focus:ring-2 focus:ring-[#FFD400] placeholder:text-gray-400 text-right"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white text-sm font-bold block">
                                {t('driver.form.phone')} <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                                className="bg-white border-none text-gray-800 h-14 rounded-xl focus:ring-2 focus:ring-[#FFD400] placeholder:text-gray-400 text-right"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white text-sm font-bold block">
                                    {t('driver.form.vehicleType')} <span className="text-red-500">*</span>
                                </Label>
                                <Select>
                                    <SelectTrigger className="bg-white border-none text-gray-500 h-14 rounded-xl focus:ring-2 focus:ring-[#FFD400] flex-row-reverse">
                                        <SelectValue placeholder={language === 'ar' ? 'يرجى اختيار نوع المركبة' : 'Please select vehicle type'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="motorcycle">دراجة نارية / Motorcycle</SelectItem>
                                        <SelectItem value="car">سيارة / Car</SelectItem>
                                        <SelectItem value="bicycle">دراجة هوائية / Bicycle</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white text-sm font-bold block">
                                    {t('driver.form.city')} <span className="text-red-500">*</span>
                                </Label>
                                <Select>
                                    <SelectTrigger className="bg-white border-none text-gray-500 h-14 rounded-xl focus:ring-2 focus:ring-[#FFD400] flex-row-reverse">
                                        <SelectValue placeholder={language === 'ar' ? 'يرجى اختيار المدينة' : 'Please select city'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="casablanca">الدار البيضاء / Casablanca</SelectItem>
                                        <SelectItem value="rabat">الرباط / Rabat</SelectItem>
                                        <SelectItem value="marrakech">مراكش / Marrakech</SelectItem>
                                        <SelectItem value="tangier">طنجة / Tangier</SelectItem>
                                        <SelectItem value="fes">فاس / Fes</SelectItem>
                                        <SelectItem value="agadir">أكادير / Agadir</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-white text-sm font-bold block text-center">
                                {t('driver.form.license')}
                            </Label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setLicense('no')}
                                    className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all ${license === 'no' ? 'bg-[#FFD400] text-[#0d1b42]' : 'bg-white text-gray-500'}`}
                                >
                                    <span className="font-bold">{t('driver.form.no')}</span>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${license === 'no' ? 'border-[#0d1b42]' : 'border-gray-300'}`}>
                                        {license === 'no' && <div className="w-2.5 h-2.5 rounded-full bg-[#0d1b42]" />}
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLicense('yes')}
                                    className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all ${license === 'yes' ? 'bg-[#FFD400] text-[#0d1b42]' : 'bg-white text-gray-500'}`}
                                >
                                    <span className="font-bold">{t('driver.form.yes')}</span>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${license === 'yes' ? 'border-[#0d1b42]' : 'border-gray-300'}`}>
                                        {license === 'yes' && <div className="w-2.5 h-2.5 rounded-full bg-[#0d1b42]" />}
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-white text-sm font-bold block text-center">
                                {t('driver.form.insurance')}
                            </Label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setInsurance('no')}
                                    className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all ${insurance === 'no' ? 'bg-[#FFD400] text-[#0d1b42]' : 'bg-white text-gray-500'}`}
                                >
                                    <span className="font-bold">{t('driver.form.no')}</span>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${insurance === 'no' ? 'border-[#0d1b42]' : 'border-gray-300'}`}>
                                        {insurance === 'no' && <div className="w-2.5 h-2.5 rounded-full bg-[#0d1b42]" />}
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setInsurance('yes')}
                                    className={`flex items-center justify-between px-6 py-4 rounded-xl transition-all ${insurance === 'yes' ? 'bg-[#FFD400] text-[#0d1b42]' : 'bg-white text-gray-500'}`}
                                >
                                    <span className="font-bold">{t('driver.form.yes')}</span>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${insurance === 'yes' ? 'border-[#0d1b42]' : 'border-gray-300'}`}>
                                        {insurance === 'yes' && <div className="w-2.5 h-2.5 rounded-full bg-[#0d1b42]" />}
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-4">
                            <Button
                                type="submit"
                                className="h-12 w-full bg-[#FFD400] hover:bg-[#FFD400]/90 rounded-xl shadow-lg transition-all transform active:scale-95"
                            >
                                <span className="text-white text-xl font-semibold">
                                    {language === 'ar' ? 'أرسل الآن' : 'Send Now'}
                                </span>
                            </Button>
                        </div>
                    </form>

                    <div className="flex flex-col items-center gap-8 w-full">
                        <h3 className="text-white text-2xl font-bold text-center">
                            {language === 'ar' ? 'هل لديك أسئلة أو ترغب في المساعدة؟' : 'Do you have questions or need help?'}
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-7xl">
                            {contactButtons.map((button, index) => (
                                <Button
                                    key={index}
                                    className="h-auto w-full bg-white hover:bg-white/90 rounded-2xl p-3 md:p-4 flex items-center border-0 transition-all group overflow-hidden"
                                >
                                    <div className={`flex items-center gap-2 md:gap-4 w-full [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? 'flex-row' : 'flex-row'}`}>
                                        <div className={`flex items-center gap-2 md:gap-4 flex-1 [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? 'flex-row' : 'flex-row'}`}>
                                            {button.icon}
                                            <div className={`flex flex-col ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                                                <span className="text-[#0D1B42] font-bold text-[10px] sm:text-sm md:text-md leading-tight [font-family: Georgia, 'Times New Roman', Times, serif]">
                                                    {language === 'ar' ? button.textAr.split(':')[0] : button.textEn.split(':')[0]}
                                                </span>
                                                {button.value && (
                                                    <span className="text-[#0D1B42]/70 text-[9px] sm:text-xs md:text-sm font-semibold lowercase leading-tight [font-family: Georgia, 'Times New Roman', Times, serif]">
                                                        {button.value}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0">
                                            {language === 'ar' ? (
                                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#0D1B42]/40 group-hover:-translate-x-1 transition-transform" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#0D1B42]/40 group-hover:translate-x-1 transition-transform" />
                                            )}
                                        </div>
                                    </div>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};