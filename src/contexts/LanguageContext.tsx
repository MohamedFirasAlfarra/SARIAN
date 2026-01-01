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


    'featured.driver.desc': 'هل تمتلك مطعما أو متجرا؟ انضم إلينا واجعل خدماتك تصل إلى المزيد من العملاء.',
    'featured.driver.btn': 'ابدأ الآن',
    'featured.driver.title': 'كن شريكا',
    'featured.partner.desc': 'حقق دخلك الخاص واختر ساعات العمل التي تناسبك',
    'featured.partner.btn': 'ابدأ الآن',
    'featured.partner.title': 'كن مندوب توصيل',

    'featured.title': 'فرصتك للنجاح والإستقلال المادي تبدأ هنا!',
    'featured.desc': 'سواء كنت صاحب مشروع تطمح لتوسيع نجاحك أو تبحث عن عمل مرن يحقق لك دخلاً مضمونًا، نحن هنا لدعمك خطوة بخطوة!',

    // FAQ Section
    'faq.title': 'أسئلة متكررة',
    'faq.subtitle': 'لديك سؤال؟ إستفسار؟ شيء ما يشغل بالك',
    'faq.question': 'ما هو تطبيق SARIAN؟',
    'faq.answer': 'محتوى الإجابة هنا',

    'faq.q1': 'ما هو تطبيق SARIAN؟',
    'faq.q2': 'ما هي المدن التي يتوفر فيها التطبيق؟',
    'faq.q3': 'هل هناك رسوم إضافية عند استخدام التطبيق؟',
    'faq.q4': 'ما هي متطلبات العمل كسائق؟',
    'faq.q5': 'كيف يمكنني تحميل التطبيق وإنشاء حساب جديد؟',
    'faq.q6': 'كيف يعمل تطبيق SARIAN؟',
    'faq.q7': 'كيف يمكنني طلب الطعام أو البقالة من خلال التطبيق؟',
    'faq.q8': 'هل يمكنني تعديل أو إلغاء طلبي بعد إرساله؟',
    'faq.q9': 'ما هي الفوائد التي سأحصل عليها كشريك؟',
    'faq.q10': 'كيف يمكنني الانضمام كشريك (مطعم/متجر) في SARIAN؟',

    'faq.a1': 'تطبيق سوري شامل يوفر خدمات مثل طلب الطعام، التبضع من البقالة، وإرسال الورود مباشرة إلى باب منزلك.',
    'faq.a2': 'حاليًا، يتوفر تطبيق SARIAN في عدة مدن مغربية، ويتم توسيع نطاق الخدمات باستمرار.',
    'faq.a3': 'قد يتم تطبيق رسوم خدمة أو توصيل حسب نوع الطلب والمسافة، ويتم عرض جميع التكاليف قبل تأكيد الطلب.',
    'faq.a4': 'يجب أن يكون لديك رخصة قيادة سارية، مركبة صالحة للاستخدام، وهاتف ذكي لتلقي الطلبات.',
    'faq.a5': 'يمكنك تحميل التطبيق من متجر Google Play أو App Store وإنشاء حساب جديد باستخدام رقم هاتفك أو بريدك الإلكتروني.',
    'faq.a6': 'يعمل التطبيق على توصيل العملاء بالمطاعم والمتاجر القريبة، حيث يمكنهم تقديم الطلبات بسهولة عبر التطبيق، والدفع إلكترونيا، وتتبع التوصيل.',
    'faq.a7': 'يمكنك طلب الطعام أو البقالة عبر تطبيق SARIAN بسهولة من خلال تصفح القائمة، اختيار المنتجات، وإتمام الطلب عبر طرق الدفع المتاحة.',
    'faq.a8': 'نعم، يمكنك تعديل أو إلغاء طلبك خلال فترة زمنية قصيرة بعد الإرسال، وفقًا لسياسات المتجر أو المطعم.',
    'faq.a9': 'يمكنك توسيع نطاق عملك، الوصول إلى المزيد من العملاء، والاستفادة من خدمات الدفع الإلكتروني والتسويق.',
    'faq.a10': 'إذا كنت تمتلك مطعما أو متجرا، يمكنك التسجيل عبر الموقع الإلكتروني أو التطبيق، وسيقوم فريقنا بالتواصل معك لتفعيل حسابك.',

    // Footer
    'footer.cities': 'المدن',
    'footer.cities.rabat': 'دمشق',
    'footer.cities.casablanca': 'حلب',
    'footer.cities.tangier': 'حمص',
    'footer.cities.agadir': 'طرطوس',
    'footer.cities.fes': 'درعا',
    'footer.cities.marrakech': 'السويداء',
    'footer.restaurants': 'أبرز المطاعم',
    'footer.restaurants.moojood': 'Moojood',
    'footer.restaurants.darnaji': 'دار الناجي',
    'footer.restaurants.suchihouse': 'Sushi House',
    'footer.restaurants.ayumuk': 'Ayumuk Ya Cham',
    'footer.restaurants.capanna': 'CAPANNA',
    'footer.restaurants.dipndip': 'dipndip',
    'footer.cuisines': 'أشهر المأكولات',
    'footer.foods.syrian': 'أطباق سورية',
    'footer.foods.asian': 'أطباق آسيوية',
    'footer.foods.italian': 'أطباق إيطالية',
    'footer.foods.desserts': 'حلويات',
    'footer.foods.moroccan': 'أطباق مغربية',
    'footer.services': 'الخدمات',
    'footer.services.food': 'اطلب الطعام',
    'footer.services.flowers': 'أرسل الورود',
    'footer.services.chocolate': 'أطلب شوكولاتة',
    'footer.services.grocery': 'تسوق البقالة',
    'footer.services.gift': 'أرسل هدية',
    'footer.services.pharmacy': 'البارافارماسي',
    'footer.links.about': 'من نحن؟',
    'footer.links.contact': 'تواصل معنا',
    'footer.links.how': 'كيف يعمل تطبيق SARIAN؟',
    'footer.links.terms': 'الشروط والاحكام',
    'footer.links.privacy': 'سياسة الخصوصية',
    'footer.links.blog': 'المدونة',
    'footer.links.review': 'تقييم تطبيق SARIAN؟',
    'footer.links.press': 'الصحافة',
    'footer.links.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.links.security': 'سياسة ثيود الصبر', // Matching image text "ثيود الصبر" or similar? Wait, image says something like "سياسة قيود السر" or "ثيود الصبر". I'll try to match best.
    'footer.aboutUs': 'من نحن؟',
    'footer.contact': 'تواصل معنا',
    'footer.howItWorks': 'كيف يعمل تطبيق SARIAN؟',
    'footer.rights': 'جميع الحقوق محفوظة لدى SARIAN.ma 2025 ©',
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

    'featured.driver.desc': 'Do you own a restaurant or a store? Join us and reach more customers.',
    'featured.driver.btn': 'Start now',
    'featured.driver.title': 'Become a partner',
    'featured.partner.desc': 'Earn your own income and choose your own working hours.',
    'featured.partner.btn': 'Start now',
    'featured.partner.title': 'Become a delivery driver',

    'featured.title': 'Your opportunity for success and financial independence starts here!',
    'featured.desc': 'Whether you are a business owner aspiring to expand your success or looking for flexible work that provides a guaranteed income, we are here to support you every step of the way!',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Have a question? Inquiry? Something on your mind',
    'faq.question': 'What is the SARIAN app?',
    'faq.answer': 'Answer content here',

    'faq.q1': 'What is the SARIAN app?',
    'faq.q2': 'Which cities is the app available in?',
    'faq.q3': 'Are there any extra fees when using the app?',
    'faq.q4': 'What are the requirements for working as a driver?',
    'faq.q5': 'How can I download the app and create a new account?',
    'faq.q6': 'How does the SARIAN app work?',
    'faq.q7': 'How can I order food or groceries through the app?',
    'faq.q8': 'Can I modify or cancel my order after placing it?',
    'faq.q9': 'What benefits will I get as a partner?',
    'faq.q10': 'How can I join as a partner (restaurant/store) in SARIAN?',

    'faq.a1': 'A comprehensive Syrian app that provides services such as ordering food, grocery shopping, and sending flowers directly to your doorstep.',
    'faq.a2': 'Currently, the SARIAN app is available in several Moroccan cities, and the service is constantly expanding.',
    'faq.a3': 'Service or delivery fees may apply depending on the type of order and distance. All costs are displayed before confirming the order.',
    'faq.a4': 'You must have a valid driver\'s license, a roadworthy vehicle, and a smartphone to receive orders.',
    'faq.a5': 'You can download the app from the Google Play Store or App Store and create a new account using your phone number or email address.',
    'faq.a6': 'The app connects customers with nearby restaurants and stores, allowing them to easily place orders through the app, pay electronically, and track delivery.',
    'faq.a7': 'You can easily order food or groceries through the SARIAN app by browsing the menu, selecting products, and completing the order using various payment methods. available.',
    'faq.a8': 'Yes, you can modify or cancel your order within a short period after submission, according to the store or restaurants policies.',
    'faq.a9': 'You can expand your business, reach more customers, and benefit from electronic payment and marketing services.',
    'faq.a10': 'If you own a restaurant or store, you can register through the website or app, and our team will contact you to activate your account.',

    // Footer
    'footer.cities': 'Cities',
    'footer.cities.rabat': 'Damascus',
    'footer.cities.casablanca': 'Aleppo',
    'footer.cities.tangier': 'Homs',
    'footer.cities.agadir': 'Tartus',
    'footer.cities.fes': 'Daraa',
    'footer.cities.marrakech': 'Sweida',
    'footer.restaurants': 'Restaurants',
    'footer.restaurants.moojood': 'Moojood',
    'footer.restaurants.darnaji': 'Dar Al Naji',
    'footer.restaurants.suchihouse': 'SuchiHouse',
    'footer.restaurants.capanna': 'Capanna',
    'footer.restaurants.dipndip': 'dipndip',
    'footer.cuisines': 'Cuisines',
    'footer.foods.syrian': 'Syrian',
    'footer.foods.asian': 'Asian',
    'footer.foods.italian': 'Italian',
    'footer.foods.desserts': 'Desserts',
    'footer.restaurants.ayumuk': 'Ayumuk Ya Cham',
    'footer.services': 'Services',
    'footer.services.food': 'Order Food',
    'footer.services.flowers': 'Send Flowers',
    'footer.services.chocolate': 'Order Chocolate',
    'footer.services.grocery': 'Shop Groceries',
    'footer.foods.moroccan': 'Moroccan dishes',
    'footer.services.gift': 'Send a Gift',
    'footer.services.pharmacy': 'Parapharmacy',
    'footer.links.about': 'About Us',
    'footer.links.contact': 'Contact Us',
    'footer.links.how': 'How SARIAN App Works',
    'footer.links.terms': 'Terms and Conditions',
    'footer.links.privacy': 'Privacy Policy',
    'footer.links.blog': 'Blog',
    'footer.links.review': 'Review SARIAN?',
    'footer.links.press': 'Press',
    'footer.links.cookies': 'Cookies Policy',
    'footer.links.security': 'Wait Privacy Policy',
    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.howItWorks': 'How SARIAN App Works',
    'footer.rights': 'All Rights Reserved to SARIAN.ma 2025 ©',
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
    const langTranslations = translations[language] as Record<string, string>;
    return langTranslations[key] || key;
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
