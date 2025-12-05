import React from 'react';
import { Link } from 'react-router-dom';

interface LogoSectionProps {
  t: (key: string) => string;
  language: string;
}

export const LogoSection: React.FC<LogoSectionProps> = ({ t, language }) => {
  return (
    <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
      <div className="relative">
        <img 
          src="https://c.animaapp.com/mhx6z2hgaXoALR/img/img_0192.JPG"
          alt={t('siteName')}
          className="
            w-16 h-16 rounded-2xl 
            sm:w-14 sm:h-14 sm:rounded-xl
            md:w-14 md:h-14 md:rounded-xl
            lg:w-14 lg:h-14 lg:rounded-xl
            xl:w-14 xl:h-14 xl:rounded-xl
            object-contain shadow-lg group-hover:shadow-xl transition-all duration-300 
            border-2 border-primary/20 group-hover:border-primary/40
          "
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl -z-10 transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-300" />
      </div>
      
      {/* إضافة اسم الموقع بجانب اللوغو في الموبايل */}
      <div className="block sm:hidden">
        <div className="flex flex-col">
          <h1 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
            {t('siteName')}
          </h1>
          <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 truncate max-w-[120px]">
            {t('siteTagline')}
          </p>
        </div>
      </div>
      
      <div className="hidden sm:block">
        <h1 className="text-lg sm:text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {t('siteName')}
        </h1>
        <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {t('siteTagline')}
        </p>
      </div>
    </Link>
  );
};