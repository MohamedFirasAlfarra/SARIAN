import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navbar
    'nav.services': 'خدماتنا',
    'nav.cities': 'المدن التي نخدمها',
    'nav.driver': 'كن سائقا',
    'nav.partner': 'كن شريكا',
    'nav.faq': 'الاسئلة الشائعة',
    'nav.deliveryDriver': 'كن مندوب توصيل',
    
    // Hero Section
    'hero.title': 'كل خدماتك اليومية...',
    'hero.subtitle': 'في تطبيق واحد',
    'hero.description1': 'هو أول تطبيق مغربي شامل يلبي كل احتياجاتك،',
    'hero.description2': 'من الطعام إلى التسوق. بضغطة زر، يصلك كل شيء بسرعة، احترافية.',
    
    // Services Section
    'services.title': 'خدمات متنوعة، تطبيق واحد',
    'services.flowers.title': 'أرسل الورود',
    'services.flowers.desc': 'اختر من بين أجمل باقات الورود وأرسل معها مشاعرك بطريقتك الخاصة.',
    'services.flowers.btn': 'ارسل الان',
    'services.grocery.title': 'تسوق البقالة',
    'services.grocery.desc': 'اختر من بين أجمل باقات الورود وأرسل معها مشاعرك بطريقتك الخاصة.',
    'services.grocery.btn': 'تسوق الان',
    'services.food.title': 'اطلب الطعام',
    'services.food.desc': 'استمتع بألذ الأطباق من أشهر المطاعم دون مغادرة منزلك.',
    'services.food.btn': 'اطلب الان',
    'services.pharmacy.title': 'البارافارماسي',
    'services.pharmacy.desc': 'احتياجات الصحة والجمال أصبحت أسهل. تصفح منتجاتنا.',
    'services.pharmacy.btn': 'ارسل الان',
    'services.chocolate.title': 'أطلب شوكولاتة',
    'services.chocolate.desc': 'اختر نوع الشوكولاتة المفضلة لديك واستمتع بمذاق لذيذ يصل إلى بابك في دقائق.',
    'services.chocolate.btn': 'تسوق الان',
    'services.gift.title': 'أرسل هدية',
    'services.gift.desc': 'اختر من بين خياراتنا المميزة وأرسلها مع رسالة خاصة تجعل يومهم أكثر جمالا.',
    'services.gift.btn': 'اطلب الان',
    
    // Coverage Section
    'coverage.title': 'نصل إليك في كل مكان!',
    'coverage.desc': 'متواجدون في جميع المدن السورية، من العاصمة دمشق إلى جميع المحافظات السورية وأكثر!',
    
    // Partnership Section
    'partnership.title': 'فرصتك للنجاح والإستقلال المادي تبدأ هنا!',
    'partnership.desc': 'سواء كنت صاحب مشروع تطمح لتوسيع نجاحك أو تبحث عن عمل مرن يحقق لك دخلا مضمونا، نحن هنا لدعمك خطوة بخطوة!',
    'partnership.driver.title': 'كن مندوب توصيل',
    'partnership.driver.desc': 'حقق دخلك الخاص واختر ساعات العمل التي تناسبك',
    'partnership.partner.title': 'كن شريكا',
    'partnership.partner.desc': 'هل تمتلك مطعما أو متجرا؟ انضم إلينا واجعل خدماتك تصل إلى المزيد من العملاء.',
    'partnership.btn': 'ابدأ الان',
    
    // FAQ Section
    'faq.title': 'أسئلة متكررة',
    'faq.subtitle': 'لديك سؤال؟ إستفسار؟ شيء ما يشغل بالك',
    'faq.question': 'ما هو تطبيق Done؟',
    'faq.answer': 'محتوى الإجابة هنا',
    
    // Footer
    'footer.cities': 'المدن',
    'footer.restaurants': 'المطاعم',
    'footer.cuisines': 'المأكولات',
    'footer.services': 'الخدمات',
    'footer.aboutUs': 'من نحن؟',
    'footer.contact': 'تواصل معنا',
    'footer.howItWorks': 'كيف يعمل تطبيق SARIAN',
    'footer.terms': 'الشروط والاحكام',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.rights': 'جميع الحقوق محفوظة لدى SARIAN.com 2025 ©',
    'footer.language': 'العربية',

    // Partner Page
    'partner.title': 'انضم كشريك في SARIAN',
    'partner.description': 'هل تمتلك مطعما، متجرا، أو مشروعا صغيرا؟ تطبيق SARIAN هو بوابتك للوصول إلى آلاف العملاء الجدد وزيادة مبيعاتك بسهولة!',
    'partner.joinUs': 'انضم الينا',
    'partner.form.title': 'نموذج التسجيل الأولي',
    'partner.form.description': 'هل ترغب في عرض منتجاتك على تطبيق SARIAN؟ املأ النموذج التالي وسنتواصل معك لتفعيل حسابك:',
  },
  en: {
    // Navbar
    'nav.services': 'Our Services',
    'nav.cities': 'Cities We Serve',
    'nav.driver': 'Become a Driver',
    'nav.partner': 'Become a Partner',
    'nav.faq': 'FAQ',
    'nav.deliveryDriver': 'Become a Delivery Driver',
    
    // Hero Section
    'hero.title': 'All Your Daily Services...',
    'hero.subtitle': 'In One App',
    'hero.description1': 'The first comprehensive Moroccan app that meets all your needs,',
    'hero.description2': 'from food to shopping. With one click, everything arrives quickly and professionally.',
    
    // Services Section
    'services.title': 'Diverse Services, One App',
    'services.flowers.title': 'Send Flowers',
    'services.flowers.desc': 'Choose from the most beautiful flower bouquets and send your feelings in your own way.',
    'services.flowers.btn': 'Send Now',
    'services.grocery.title': 'Shop Groceries',
    'services.grocery.desc': 'Choose from the most beautiful flower bouquets and send your feelings in your own way.',
    'services.grocery.btn': 'Shop Now',
    'services.food.title': 'Order Food',
    'services.food.desc': 'Enjoy the most delicious dishes from the most famous restaurants without leaving your home.',
    'services.food.btn': 'Order Now',
    'services.pharmacy.title': 'Parapharmacy',
    'services.pharmacy.desc': 'Health and beauty needs made easier. Browse our products.',
    'services.pharmacy.btn': 'Send Now',
    'services.chocolate.title': 'Order Chocolate',
    'services.chocolate.desc': 'Choose your favorite type of chocolate and enjoy a delicious taste delivered to your door in minutes.',
    'services.chocolate.btn': 'Shop Now',
    'services.gift.title': 'Send a Gift',
    'services.gift.desc': 'Choose from our distinctive options and send it with a special message to make their day more beautiful.',
    'services.gift.btn': 'Order Now',
    
    // Coverage Section
    'coverage.title': 'We Reach You Everywhere!',
    'coverage.desc': 'Present in all Syrian cities, from the capital Damascus to all Syrian governorates and more!',
    
    // Partnership Section
    'partnership.title': 'Your Opportunity for Success and Financial Independence Starts Here!',
    'partnership.desc': 'Whether you are a business owner aspiring to expand your success or looking for flexible work that provides you with guaranteed income, we are here to support you step by step!',
    'partnership.driver.title': 'Become a Delivery Driver',
    'partnership.driver.desc': 'Earn your own income and choose working hours that suit you',
    'partnership.partner.title': 'Become a Partner',
    'partnership.partner.desc': 'Do you own a restaurant or store? Join us and make your services reach more customers.',
    'partnership.btn': 'Start Now',
    
    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Have a question? Inquiry? Something on your mind',
    'faq.question': 'What is the Done app?',
    'faq.answer': 'Answer content here',
    
    // Footer
    'footer.cities': 'Cities',
    'footer.restaurants': 'Restaurants',
    'footer.cuisines': 'Cuisines',
    'footer.services': 'Services',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.howItWorks': 'How SARIAN App Works',
    'footer.terms': 'Terms and Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All Rights Reserved to SARIAN.com 2025 ©',
    'footer.language': 'English',

    // Partner Page
    'partner.title': 'Join as a Partner in SARIAN',
    'partner.description': 'Do you own a restaurant, store, or small business? SARIAN app is your gateway to reach thousands of new customers and increase your sales easily!',
    'partner.joinUs': 'Join Us',
    'partner.form.title': 'Initial Registration Form',
    'partner.form.description': 'Would you like to showcase your products on SARIAN app? Fill out the form below and we will contact you to activate your account:',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
