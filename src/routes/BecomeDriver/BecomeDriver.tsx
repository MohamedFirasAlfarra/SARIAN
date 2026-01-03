import { Navbar } from "../../components/Navbar";
import { FooterSection } from "../../screens/Sarian/sections/FooterSection/FooterSection";
import { DriverHeroSection } from "./sections/DriverHeroSection";
import { DriverBenefitsSection } from "./sections/DriverBenefitsSection";
import { DriverRequirementsSection } from "./sections/DriverRequirementsSection";
import { DriverRegistrationFormSection } from "./sections/DriverRegistrationFormSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { useEffect } from "react";
import { AppDownloadSection } from "../BecomePartner/sections/AppDownloadSection";

export const BecomeDriver = () => {
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen bg-white ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
            <Navbar />
            <main>
                <DriverHeroSection />
                <DriverBenefitsSection />
                <DriverRequirementsSection />
                <DriverRegistrationFormSection />
                 <AppDownloadSection />
            </main>
            <FooterSection />
        </div>
    );
};
