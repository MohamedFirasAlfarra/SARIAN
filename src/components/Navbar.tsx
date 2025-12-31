import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Search, Globe, Car, Building2, Menu, X, Facebook, Youtube, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
    const { t, language, setLanguage } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { text: t('nav.services'), href: "#", isExternal: false },
        { text: t('nav.cities'), href: "https://done.ma/#section-cities", isExternal: true },
        { text: t('nav.driver'), href: "#", isExternal: false },
        { text: t('nav.partner'), href: "/partner", isExternal: false },
        { text: t('nav.faq'), href: "#", isExternal: false },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-20 py-4 w-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-[#FFD400]' : 'bg-[#FFD400]/95 backdrop-blur-sm'} shadow-sm`}>

                {/* Logo Section (Start) */}
                <Link to="/" className="flex items-center">
                    <img
                        className="h-14 lg:h-14 w-auto object-contain"
                        alt="Sarian Logo"
                        src="https://c.animaapp.com/mj5q34e29K0n2Q/img/logo-sarian2-1.png"
                    />
                </Link>

                {/* Navigation Links (Center) - Hidden on Mobile */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link, index) => {
                        const commonClassName = `relative text-[#0d1b42] text-base lg:text-xl font-bold 
                                    whitespace-nowrap [font-family: Georgia, 'Times New Roman', Times, serif] 
                                    ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'} group`;

                        const content = (
                            <>
                                <span className="relative z-10">{link.text}</span>

                                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#0d1b42] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>

                                <span className="absolute inset-0 bg-gradient-to-r from-[#0d1b42]/5 to-[#0d1b42]/0
                                 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </>
                        );

                        if (link.isExternal) {
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={commonClassName}
                                >
                                    {content}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                to={link.href}
                                className={commonClassName}
                            >
                                {content}
                            </Link>
                        );
                    })}
                </div>

                {/* Actions Section (End): Buttons & Icons */}
                <div className="flex items-center gap-3 lg:gap-4">
                    {/* Mobile Language Toggle */}
                    <Button
                        variant="ghost"
                        className="lg:hidden text-lg font-bold"
                        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                    >
                        <Globe className="w-5 h-5" />
                    </Button>

                    {/* Mobile Menu Icon */}
                    <button
                        className="lg:hidden p-2 text-[#0d1b42] hover:bg-black/5 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            variant="default"
                            className="bg-[#FFE55C] hover:bg-[#ffe55c]/80 text-[#0d1b42] border border-[#0d1b42]/10 rounded-[10px] px-3 gap-2 h-[45px] shadow-sm transition-all duration-300 hover:scale-[1.02]"
                        >
                            <Car className="w-5 h-5" />
                            <span className={`font-semibold text-sm ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                                {t('nav.deliveryDriver')}
                            </span>
                        </Button>

                        <Link to="/partner">
                            <Button
                                variant="default"
                                className="bg-[#FFE55C] hover:bg-[#ffe55c]/80 text-[#0d1b42] border border-[#0d1b42]/10 rounded-[10px] px-3 gap-2 h-[45px] shadow-sm transition-all duration-300 hover:scale-[1.02]"
                            >
                                <Building2 className="w-5 h-5" />
                                <span className={`font-semibold text-sm ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                                    {t('nav.partner')}
                                </span>
                            </Button>
                        </Link>

                        <div className="w-px h-8 bg-[#0d1b42]/10 mx-1" />

                        <button className="p-2 hover:bg-black/5 rounded-full transition-colors hover:scale-110 duration-300">
                            <Search className="w-5 h-5 text-[#0d1b42]" />
                        </button>

                        <button
                            className="p-2 hover:bg-black/5 rounded-full transition-colors hover:scale-110 duration-300"
                            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                        >
                            <Globe className="w-5 h-5 text-[#0d1b42]" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col pt-28 px-6 overflow-y-auto shadow-2xl ${isMobileMenuOpen ? "translate-x-0 opacity-100" : (language === 'ar' ? "translate-x-full opacity-0" : "-translate-x-full opacity-0")
                    }`}
                style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
            >
                <div className="flex flex-col gap-6 items-start flex-grow">
                    {navLinks.map((link, index) => {
                        const commonClassName = "relative text-[#0d1b42] text-2xl font-bold hover:text-[#0d1b42]/90 transition-all duration-300 whitespace-nowrap [font-family: Georgia, 'Times New Roman', Times, serif] w-full border-b border-gray-100 pb-4 group";

                        const content = (
                            <>
                                <span className="relative z-10">{link.text}</span>
                                <span className="absolute left-0 bottom-4 h-[2px] bg-[#FFD400] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left w-1/2"></span>
                            </>
                        );

                        if (link.isExternal) {
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className={commonClassName}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {content}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                to={link.href}
                                className={commonClassName}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {content}
                            </Link>
                        );
                    })}

                    <div className="flex flex-row gap-4 w-full mt-4">
                        <Button
                            variant="default"
                            className="flex-1 bg-[#FFE55C] hover:bg-[#ffe55c]/90 text-[#0d1b42] border border-[#0d1b42]/10 rounded-xl py-4 text-sm lg:text-lg gap-2 shadow-sm justify-center px-2 transition-transform active:scale-95 group hover:scale-[1.02] duration-300"
                        >
                            <Car className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                            <span className={`font-semibold ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                                {t('nav.deliveryDriver')}
                            </span>
                        </Button>

                        <Link to="/partner" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button
                                variant="default"
                                className="w-full bg-[#FFE55C] hover:bg-[#ffe55c]/90 text-[#0d1b42] border border-[#0d1b42]/10 rounded-xl py-4 text-sm lg:text-lg gap-2 shadow-sm justify-center px-2 transition-transform active:scale-95 group hover:scale-[1.02] duration-300"
                            >
                                <Building2 className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                                <span className={`font-semibold ${language === 'ar' ? '[direction:rtl]' : '[direction:ltr]'}`}>
                                    {t('nav.partner')}
                                </span>
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mt-auto w-full justify-center border-t border-gray-100 pt-8 pb-8">
                        {/* Facebook - Blue */}
                        <a href="#" className="group p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                            <Facebook className="w-7 h-7 text-gray-600 group-hover:text-[#1877F2] transition-colors" />
                        </a>

                        {/* YouTube - Red */}
                        <a href="#" className="group p-3 bg-gray-50 rounded-full hover:bg-red-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                            <Youtube className="w-7 h-7 text-gray-600 group-hover:text-[#FF0000] transition-colors" />
                        </a>

                        {/* Instagram - Pink/Purple Gradient Text Effect via class usually, but simple text color for SVG */}
                        <a href="#" className="group p-3 bg-gray-50 rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                            <Instagram className="w-7 h-7 text-gray-600 group-hover:text-[#E4405F] transition-colors" />
                        </a>

                        {/* LinkedIn - Blue */}
                        <a href="#" className="group p-3 bg-gray-50 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                            <Linkedin className="w-7 h-7 text-gray-600 group-hover:text-[#0A66C2] transition-colors" />
                        </a>

                        {/* WhatsApp - Green */}
                        <a href="#" className="group p-3 bg-gray-50 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                            <MessageCircle className="w-7 h-7 text-gray-600 group-hover:text-[#25D366] transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};