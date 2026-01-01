import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Textarea } from "../../../components/ui/textarea";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Headset, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export const RegistrationFormSection = (): JSX.Element => {
  const { language } = useLanguage();

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
    <section className="relative w-full py-20 pb-10 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-[#333333] [clip-path:polygon(0%,100%_0,100%_95%,0_100%)] md:[clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-white text-2xl md:text-2xl font-bold [font-family: Georgia, 'Times New Roman', Times, serif]">
              {language === 'ar' ? 'نموذج التسجيل الأولي' : 'Initial Registration Form'}
            </h2>
            <p className="text-white text-[15px] md:text-lg font-medium max-w-xl opacity-90">
              {language === 'ar'
                ? 'هل ترغب في عرض منتجاتك على تطبيق SARIAN؟ املأ النموذج التالي وسنتواصل معك لتفعيل حسابك:'
                : 'Would you like to showcase your products on SARIAN app? Fill out the form below and we will contact you to activate your account:'
              }
            </p>
          </div>

          <div className="w-full max-w-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

              <div className={`md:col-span-2 flex flex-col gap-2 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
                <Label className="text-white text-sm font-bold flex items-center gap-1">
                  {language === 'ar' ? 'اسم المشروع / المتجر' : 'Project / Store Name'}
                  <span className="text-[#FF4B2B]">*</span>
                </Label>
                <Input
                  placeholder={language === 'ar' ? 'اسم المشروع / المتجر' : 'Project / Store Name'}
                  className={`h-10 bg-white rounded-xl border-0 text-[#0D1B42] placeholder:text-[12px] placeholder:text-gray-400 ${language === 'ar' ? 'text-right [direction:rtl]' : 'text-left [direction:ltr]'}`}
                />
              </div>
              <div className={`flex flex-col gap-2 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
                <Label className="text-white text-sm font-bold flex items-center gap-1">
                  {language === 'ar' ? 'نوع النشاط' : 'Activity Type'}
                  <span className="text-[#FF4B2B]">*</span>
                </Label>
                <Select>
                  <SelectTrigger className={`h-10 bg-white rounded-xl border-0 text-[#0D1B42] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    <SelectValue placeholder={language === 'ar' ? 'يرجى اختيار النشاط' : 'Please select activity'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="restaurant">{language === 'ar' ? 'مطعم' : 'Restaurant'}</SelectItem>
                    <SelectItem value="store">{language === 'ar' ? 'متجر' : 'Store'}</SelectItem>
                    <SelectItem value="pharmacy">{language === 'ar' ? 'صيدلية' : 'Pharmacy'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={`flex flex-col gap-2 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
                <Label className="text-white text-sm font-bold flex items-center gap-1">
                  {language === 'ar' ? 'المدينة' : 'City'}
                  <span className="text-[#FF4B2B]">*</span>
                </Label>
                <Select>
                  <SelectTrigger className={`h-10 bg-white rounded-xl border-0 text-[#0D1B42] ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                    <SelectValue placeholder={language === 'ar' ? 'يرجى اختيار المدينة' : 'Please select city'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="damascus">{language === 'ar' ? 'دمشق' : 'Damascus'}</SelectItem>
                    <SelectItem value="aleppo">{language === 'ar' ? 'حلب' : 'Aleppo'}</SelectItem>
                    <SelectItem value="homs">{language === 'ar' ? 'حمص' : 'Homs'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className={`md:col-span-2 flex flex-col gap-2 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
                <Label className="text-white text-sm font-bold flex items-center gap-1">
                  {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  <span className="text-[#FF4B2B]">*</span>
                </Label>
                <Input
                  type="email"
                  placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  className={`h-10 bg-white rounded-xl border-0 text-[#0D1B42]  placeholder:text-[12px] placeholder:text-gray-400 ${language === 'ar' ? 'text-right [direction:rtl]' : 'text-left [direction:ltr]'}`}
                />
              </div>

              <div className={`md:col-span-2 flex flex-col gap-2 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
                <Label className="text-white text-sm font-bold flex items-center gap-1">
                  {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  <span className="text-[#FF4B2B]">*</span>
                </Label>
                <Input
                  type="tel"
                  placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  className={`h-10 bg-white rounded-xl border-0 text-[#0D1B42]  placeholder:text-[12px] placeholder:text-gray-400 ${language === 'ar' ? 'text-right [direction:rtl]' : 'text-left [direction:ltr]'}`}
                />
              </div>

              <div className={`md:col-span-2 flex flex-col gap-2 ${language === 'ar' ? 'items-start' : 'items-start'}`}>
                <Label className="text-white text-sm font-bold">
                  {language === 'ar' ? 'ملاحظات إضافية (اختياري)' : 'Additional Notes (Optional)'}
                </Label>
                <Textarea
                  placeholder={language === 'ar' ? 'ملاحظات إضافية (اختياري)' : 'Additional Notes (Optional)'}
                  className={`min-h-[120px] bg-white rounded-xl border-0 text-[#0D1B42]  placeholder:text-[12px] placeholder:text-gray-400 resize-none ${language === 'ar' ? 'text-right [direction:rtl]' : 'text-left [direction:ltr]'}`}
                />
              </div>

              <div className="md:col-span-2 pt-4">
                <Button
                  type="submit"
                  className="h-10 w-full bg-[#FFD400] hover:bg-[#FFD400]/90 rounded-xl shadow-lg transition-all transform active:scale-95"
                >
                  <span className="text-white text-md font-semibold">
                    {language === 'ar' ? 'أرسل الآن' : 'Sstart Now'}
                  </span>
                </Button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center gap-8 w-full">
            <h3 className="text-white text-2xl font-bold text-center">
              {language === 'ar' ? 'هل لديك أسئلة أو ترغب في المساعدة؟' : 'Do you have questions or need help?'}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-3xl">
              {contactButtons.map((button, index) => (
                <Button
                  key={index}
                  className="h-auto w-full bg-white hover:bg-white/90 rounded-2xl p-3 md:p-4 flex items-center border-0 transition-all group overflow-hidden"
                >
                  <div className={`flex items-center gap-2 md:gap-4 w-full [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? 'flex-row' : 'flex-row'}`}>
                    <div className={`flex items-center gap-2 md:gap-4 flex-1 [font-family: Georgia, 'Times New Roman', Times, serif] ${language === 'ar' ? 'flex-row' : 'flex-row'}`}>
                      {button.icon}
                      <div className={`flex flex-col ${language === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
                        <span className="text-[#0D1B42] font-bold text-[10px] sm:text-sm md:text-sm leading-tight [font-family: Georgia, 'Times New Roman', Times, serif]">
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