import { useLanguage } from "../../contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { FeatureHighlightsSection } from "./sections/FeatureHighlightsSection";
import { PartnerInvitationSection } from "./sections/PartnerInvitationSection";
import { RegistrationFormSection } from "./sections/RegistrationFormSection";
import { AppDownloadSection } from "./sections/AppDownloadSection";
import { FooterSection } from "@/screens/Sarian/sections/FooterSection";

export const BecomePartner = (): JSX.Element => {
    const { language } = useLanguage();

    return (
        <div className="bg-white overflow-x-hidden w-full relative">
            <Navbar />

            <main className="w-full relative">
                <div className="animate-fade-in opacity-0 [--animation-delay:200ms]">
                    <PartnerInvitationSection />
                </div>

                <div className="relative z-10">
                    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                        <FeatureHighlightsSection />
                    </div>

                    <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                        <RegistrationFormSection />
                    </div>

                    <div className="mt-0 md:mt-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:700ms]">
                        <AppDownloadSection />
                    </div>
                </div>

                <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
                    <FooterSection />
                </div>
            </main>
        </div>
    );
};
