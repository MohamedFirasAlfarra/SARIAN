import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download } from "lucide-react";

export const AppDownloadSection = (): JSX.Element => {
    const { language } = useLanguage();

    return (
        <section className="relative w-full mt-0 mb-10 md:my-20 pb-10 md:pb-0 flex justify-center px-0 md:px-10">
            <div
                className={`relative w-full max-w-6xl bg-[#FFD400] overflow-hidden flex flex-col lg:items-center ${language === 'ar' ? 'lg:flex-row' : 'lg:flex-row-reverse'} shadow-none md:shadow-[0_10px_40px_rgba(0,0,0,0.15)] md:rounded-[30px] min-h-[500px] transition-all duration-300`}>
                <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
                    <img
                        src="https://c.animaapp.com/mjtprqtwg1cmix/img/vector-2.svg"
                        className={`absolute bottom-10 ${language === 'ar' ? 'right-20' : 'left-20'} w-32 h-32 -rotate-12 brightness-0 invert`}
                        alt=""
                    />
                    <div className="absolute top-[10%] right-[10%] opacity-30">
                        <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center rotate-12">
                            <div className="w-8 h-2 bg-white rounded-full translate-y-2" />
                        </div>
                    </div>
                    <div className="absolute top-[40%] left-[5%] w-24 h-24 border-4 border-white/20 rounded-lg -rotate-12" />
                </div>

                <div className={`relative z-10 flex-1 flex flex-col gap-6 p-8 md:p-16 ${language === 'ar' ? 'items-center md:items-end text-center md:text-right' : 'items-center md:items-start text-center md:text-left'}`}>
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-[1.3] [font-family: Georgia, 'Times New Roman', Times, serif]">
                        {language === 'ar'
                            ? <>اكتشف أفضل المطاعم واطلب وجبتك المفضلة عبر <span className="text-white [font-family: Georgia, 'Times New Roman', Times, serif]">SARIAN</span></>
                            : <>Discover the best restaurants and order your favorite meal via <span className="text-white [font-family: Georgia, 'Times New Roman', Times, serif]">SARIAN</span></>
                        }
                    </h2>

                    <p className="text-white text-base md:text-lg font-light opacity-100 max-w-xl">
                        {language === 'ar'
                            ? "أشهى الأطباق، من أقرب المطاعم، بأسرع توصيل.. وبأحسن الأسعار!"
                            : "The most delicious dishes, from the nearest restaurants, with the fastest delivery... and at the best prices!"
                        }
                    </p>

                    <Button className="h-auto bg-white hover:bg-white/95 text-[#FFD400] rounded-2xl px-4 py-4 shadow-xl transition-all hover:scale-105 flex items-center gap-3 mt-4 border-0">
                        <Download className="w-5 h-5" />
                        <span className="font-semibold text-md [font-family: Georgia, 'Times New Roman', Times, serif]">
                            {language === 'ar' ? "حمل التطبيق" : "Download App"}
                        </span>
                    </Button>
                </div>

                <div className="relative flex-shrink-0 w-full lg:w-1/2 min-h-[350px] md:min-h-[400px] flex items-center justify-center p-8 overflow-visible">
                    <div className="absolute w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-white/30 rounded-full scale-110 lg:scale-[1.15]" />

                    <img
                        className={`relative z-10 w-[240px] md:w-[320px] h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 ${language === 'ar' ? '-rotate-6 translate-x-4 md:translate-x-0' : 'rotate-6 -translate-x-4 md:translate-x-0'}`}
                        alt="App Delivery Mockup"
                        src="https://c.animaapp.com/mjtprqtwg1cmix/img/image.png"
                    />
                </div>

            </div>
        </section>
    );
};