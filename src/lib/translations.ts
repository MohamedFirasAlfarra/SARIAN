import { Language } from "../types";

export const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: "لمحة",
    products: 'المنتجات',
    contact: 'الاتصال',
    favorites: 'المفضلة',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    logout: 'تسجيل الخروج',
    admin: 'اللوحة',

    // Landing Page Specific
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
    'hero.description1': 'هو أول تطبيق سوري شامل يلبي كل احتياجاتك،',
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
    'partnership.partner.desc': ' انضم إلينا واجعل خدماتك تصل إلى المزيد من العملاء.',
    'partnership.btn': 'ابدأ الان',

    // Featured Section (alias for partnership)
    'featured.title': 'فرصتك للنجاح والإستقلال المادي تبدأ هنا!',
    'featured.desc': 'سواء كنت صاحب مشروع تطمح لتوسيع نجاحك أو تبحث عن عمل مرن يحقق لك دخلا مضمونا، نحن هنا لدعمك خطوة بخطوة!',
    'featured.driver.title': 'كن مندوب توصيل',
    'featured.driver.desc': 'حقق دخلك الخاص واختر ساعات العمل التي تناسبك',
    'featured.driver.btn': 'ابدأ الان',
    'featured.partner.title': 'كن شريكا',
    'featured.partner.desc': ' انضم إلينا واجعل خدماتك تصل إلى المزيد من العملاء.',
    'featured.partner.btn': 'ابدأ الان',

    // FAQ Section
    'faq.title': 'أسئلة متكررة',
    'faq.subtitle': 'لديك سؤال؟ إستفسار؟ شيء ما يشغل بالك',
    'faq.question': 'ما هو تطبيق Done؟',
    'faq.answer': 'محتوى الإجابة هنا',



    'faq.q1': 'ما هو تطبيق SARIAN?',
    'faq.q2': 'ما هي المدن التي يتوفر فيها التطبيق؟',
    'faq.q3': 'هل هناك رسوم إضافية عند استخدام التطبيق؟',
    'faq.q4': 'ما هي متطلبات العمل كسائق؟',
    'faq.q5': 'كيف يمكنني تحميل التطبيق وإنشاء حساب جديد؟',
    'faq.q6': 'كيف يعمل تطبيق SARIAN?',
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

    // Footer Landing
    'footer.cities': 'المدن',
    'footer.cities.damascus': 'دمشق',
    'footer.cities.daraa': 'درعا',
    'footer.cities.homs': 'حمص',
    'footer.cities.tartus': 'طرطوس',
    'footer.cities.aleppo': 'حلب',

    'footer.restaurants': 'المطاعم',

    'footer.cuisines': 'المأكولات',
    'footer.foods.syrian': 'اطباق سورية',
    'footer.foods.asian': 'اطباق اسيوية',
    'footer.foods.italian': 'اطباق ايطالية',
    'footer.foods.desserts': 'حلويات',

    'footer.services': 'الخدمات',
    'footer.services.food': 'اطلب الطعام',
    'footer.services.flowers': 'ارسل الورود',
    'footer.services.chocolate': 'اطلب الشوكولا',
    'footer.services.grocery': 'تسوق البقالة',
    'footer.services.gift': 'ارسل هدية',

    'footer.aboutUs': 'من نحن؟',
    'footer.contact': 'تواصل معنا',
    'footer.howItWorks': 'كيف يعمل تطبيق SARIAN',
    'footer.terms': 'الشروط والاحكام',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.links.about': 'من نحن؟',
    'footer.links.contact': 'تواصل معنا',
    'footer.links.how': 'كيف يعمل تطبيق SARIAN',
    'footer.links.terms': 'الشروط والاحكام',
    'footer.links.privacy': 'سياسة الخصوصية',

    'footer.rights': 'جميع الحقوق محفوظة لدى SARIAN.com 2025 ©',
    'footer.language': 'العربية',


    // Branding
    siteName: 'الديك الفضي',
    siteTagline: 'جودة وطعم لا يُقاوم',

    // Home Page
    featuredChickens: 'دجاج مميز',
    recentlyListed: 'المضاف حديثاً',
    viewAll: 'عرض الكل',

    // Products
    filters: 'التصفية',
    category: 'قسم الدجاج بالفرن',
    type: 'النوع',
    quantity: 'الكمية',
    ingredients: 'المكونات',
    priceRange: 'نطاق السعر',
    applyFilters: 'تطبيق',
    clearFilters: 'مسح',
    noProducts: 'لا توجد منتجات',

    // Product Details
    price: 'السعر',
    description: 'الوصف',
    contactSeller: 'تواصل مع البائع',
    buyNow: 'اشتري الآن',
    buyWithDelivery: 'شراء مع توصيل',
    buyPickup: 'شراء واستلام من المتجر',

    // Auth
    fullName: 'الاسم الكامل',
    age: 'العمر',
    mobileNumber: 'رقم الموبايل',
    address: 'العنوان',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    confirmPassword: 'تأكيد كلمة المرور',
    switchToSignup: 'ليس لديك حساب؟ سجل الآن',
    switchToLogin: 'لديك حساب؟ سجل الدخول',
    adminLogin: 'تسجيل دخول المسؤول',
    phoneValidationSyria: 'رقم الموبايل يجب أن يبدأ بـ +963 ويتكون من 12 رقمًا',
    guestMode: 'تصفح كضيف',
    continueAsGuest: 'متابعة كضيف',
    guestModeDescription: 'استكشف الموقع بدون إنشاء حساب',
    guestRestriction: 'عذراً، يجب تسجيل الدخول للمتابعة',
    guestRestrictionMessage: 'هذه الميزة متاحة فقط للمستخدمين المسجلين. يرجى تسجيل الدخول أو إنشاء حساب جديد للاستمتاع بجميع المزايا.',
    loginNow: 'تسجيل الدخول الآن',
    createAccount: 'إنشاء حساب',
    linkTelegram: 'ربط حساب التلغرام',
    telegramLinked: 'تم ربط حساب التلغرام بنجاح',
    telegramLinkDesc: 'احصل على إشعارات فورية بحالة طلباتك عبر التلغرام',
    enterChatId: 'أدخل Chat ID الخاص بك',
    howToGetChatId: 'كيف تحصل على Chat ID؟',
    chatIdInstructions: '1. ابحث عن @SilverRoosterbot في التلغرام\n2. اضغط Start\n3. أرسل /id للبوت للحصول على المعرف الخاص بك',

    // Admin
    dashboard: 'لوحة التحكم',
    addProduct: 'إضافة منتج',
    editProduct: 'تعديل منتج',
    deleteProduct: 'حذف منتج',
    productList: 'قائمة المنتجات',
    ordersList: 'قائمة الطلبات',
    customer: 'العميل',
    name: 'الاسم',
    save: 'حفظ',
    cancel: 'إلغاء',
    delete: 'حذف',
    edit: 'تعديل',
    confirmDelete: 'هل أنت متأكد من حذف هذا المنتج؟',
    imageUrl: 'رابط الصورة',
    uploadImage: 'رفع صورة',
    selectImage: 'اختر صورة',
    changeImage: 'تغيير الصورة',
    updateStatus: 'تحديث الحالة',
    statusUpdated: 'تم تحديث حالة الطلب بنجاح',

    // Messages
    loginSuccess: 'تم تسجيل الدخول بنجاح',
    loginError: 'خطأ في تسجيل الدخول',
    signupSuccess: 'تم إنشاء الحساب بنجاح',
    signupError: 'خطأ في إنشاء الحساب',
    productAdded: 'تم إضافة المنتج بنجاح',
    productUpdated: 'تم تحديث المنتج بنجاح',
    productDeleted: 'تم حذف المنتج بنجاح',
    error: 'حدث خطأ',

    // Favorites
    addToFavorites: 'إضافة للمفضلة',
    removeFromFavorites: 'إزالة من المفضلة',
    noFavorites: 'لا توجد منتجات في المفضلة',
    favoriteAdded: 'تمت الإضافة للمفضلة',
    favoriteRemoved: 'تمت الإزالة من المفضلة',

    // Cart
    cart: 'السلة',
    addToCart: 'أضف إلى السلة',
    removeFromCart: 'إزالة من السلة',
    cartAdded: 'تمت الإضافة إلى السلة',
    cartRemoved: 'تمت الإزالة من السلة',
    emptyCart: 'السلة فارغة',
    checkout: 'إتمام الشراء',
    total: 'المجموع',
    continueShopping: 'متابعة التسوق',
    delivery: 'توصيل',
    deliveryAddress: 'العنوان',
    deliveryLocation: 'مكان التوصيل',
    governorate: 'المحافظة',
    orderNotes: 'ملاحظات على الطلب',
    confirmDelivery: 'تأكيد التوصيل',
    deliverySuccess: 'تم تأكيد طلب التوصيل بنجاح!',
    deliveryError: 'حدث خطأ أثناء تأكيد التوصيل',
    deliveryType: 'نوع التوصيل',
    pickup: 'استلام من المتجر',
    deliveryCost: 'تكلفة التوصيل',

    // About Page
    aboutTitle: 'لمحة',
    aboutSubtitle: 'قصتنا ورؤيتنا',
    ourStory: 'قصتنا',
    ourMission: 'مهمتنا',
    ourVision: 'رؤيتنا',

    // Contact Page
    contactTitle: 'اتصل',
    contactSubtitle: 'نحن هنا للمساعدة',
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    subject: 'الموضوع',
    message: 'رسالتك',
    sendMessage: 'إرسال الرسالة',
    messageSent: 'تم إرسال رسالتك بنجاح',
    phone: 'الهاتف',
    // address: 'العنوان',
    workingHours: 'ساعات العمل',

    // Orders
    myOrders: 'طلباتي',
    orderId: 'رقم الطلب',
    orderDate: 'تاريخ الطلب',
    orderStatus: 'الحالة',
    orderTotal: 'الإجمالي',
    orderDetails: 'تفاصيل الطلب',
    items: 'المنتجات',
    status_pending: 'قيد الانتظار',
    status_processing: 'قيد التجهيز',
    status_shipped: 'تم الشحن',
    status_delivered: 'تم التوصيل',
    status_cancelled: 'ملغي',
    noOrders: 'ليس لديك طلبات سابقة',
    startShopping: 'ابدأ التسوق الآن',
    backToOrders: 'العودة للطلبات',
    orderSummary: 'ملخص الطلب',
    deliveryInfo: 'معلومات التوصيل',

    // Footer
    copyright: '© 2025 الديك الفضي. جميع الحقوق محفوظة.',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    products: 'Products',
    contact: 'Contact',
    favorites: 'Favorites',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    admin: 'Admin Dashboard',

    // Landing Page Specific
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

    // Featured Section (alias for partnership)
    'featured.title': 'Your Opportunity for Success and Financial Independence Starts Here!',
    'featured.desc': 'Whether you are a business owner aspiring to expand your success or looking for flexible work that provides you with guaranteed income, we are here to support you step by step!',
    'featured.driver.title': 'Become a Delivery Driver',
    'featured.driver.desc': 'Earn your own income and choose working hours that suit you',
    'featured.driver.btn': 'Start Now',
    'featured.partner.title': 'Become a Partner',
    'featured.partner.desc': 'Do you own a restaurant or store? Join us and make your services reach more customers.',
    'featured.partner.btn': 'Start Now',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Have a question? Inquiry? Something on your mind',
    'faq.question': 'What is the Done app?',
    'faq.answer': 'Answer content here',

    // Footer Landing
    'footer.cities': 'Cities',
    'footer.cities.damascus': 'Damascus',
    'footer.cities.daraa': 'Daraa',
    'footer.cities.homs': 'Homs',
    'footer.cities.tartus': 'Tartus',
    'footer.cities.aleppo': 'Aleppo',

    'footer.restaurants': 'Restaurants',

    'footer.cuisines': 'Cuisines',
    'footer.foods.syrian': 'Syrian Dishes',
    'footer.foods.asian': 'Asian Dishes',
    'footer.foods.italian': 'Italian Dishes',
    'footer.foods.desserts': 'Desserts',

    'footer.services': 'Services',
    'footer.services.food': 'Order Food',
    'footer.services.flowers': 'Send Flowers',
    'footer.services.chocolate': 'Order Chocolate',
    'footer.services.grocery': 'Shop Groceries',
    'footer.services.gift': 'Send a Gift',

    'footer.aboutUs': 'About Us',
    'footer.contact': 'Contact Us',
    'footer.howItWorks': 'How SARIAN App Works',
    'footer.terms': 'Terms and Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.links.about': 'About Us',
    'footer.links.contact': 'Contact Us',
    'footer.links.how': 'How SARIAN App Works',
    'footer.links.terms': 'Terms and Conditions',
    'footer.links.privacy': 'Privacy Policy',

    'footer.rights': 'All Rights Reserved to SARIAN.com 2025 ©',
    'footer.language': 'English',


    // Branding
    siteName: 'Silver Rooster',
    siteTagline: 'Quality & Taste',

    // Home Page
    featuredChickens: 'Featured Chickens',
    recentlyListed: 'Recently Listed',
    viewAll: 'View All',

    // Products
    filters: 'Filters',
    category: 'Oven Chicken Category',
    type: 'Type',
    quantity: 'Quantity',
    ingredients: 'Ingredients',
    priceRange: 'Price Range',
    applyFilters: 'Apply',
    clearFilters: 'Clear',
    noProducts: 'No products found',

    // Product Details
    price: 'Price',
    description: 'Description',
    contactSeller: 'Contact Seller',
    buyNow: 'Buy Now',
    buyWithDelivery: 'Buy with Delivery',
    buyPickup: 'Buy & Pickup',

    // Auth
    fullName: 'Full Name',
    age: 'Age',
    mobileNumber: 'Mobile Number',
    address: 'Address',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    switchToSignup: "Don't have an account? Sign up",
    switchToLogin: 'Have an account? Login',
    adminLogin: 'Admin Login',
    phoneValidationSyria: 'Mobile number must start with +963 and be 12 digits',
    guestMode: 'Browse as Guest',
    continueAsGuest: 'Continue as Guest',
    guestModeDescription: 'Explore the site without creating an account',
    guestRestriction: 'Sorry, you need to login to continue',
    guestRestrictionMessage: 'This feature is only available for registered users. Please login or create a new account to enjoy all features.',
    loginNow: 'Login Now',
    createAccount: 'Create Account',
    linkTelegram: 'Link Telegram Account',
    telegramLinked: 'Telegram account linked successfully',
    telegramLinkDesc: 'Get instant notifications about your orders via Telegram',
    enterChatId: 'Enter your Chat ID',
    howToGetChatId: 'How to get Chat ID?',
    chatIdInstructions: '1. Search for @SilverRoosterbot on Telegram\n2. Press Start\n3. Send /id to the bot to get your ID',

    // Admin
    dashboard: 'Dashboard',
    addProduct: 'Add Product',
    editProduct: 'Edit Product',
    deleteProduct: 'Delete Product',
    productList: 'Product List',
    ordersList: 'Orders List',
    customer: 'Customer',
    name: 'Name',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    confirmDelete: 'Are you sure you want to delete this product?',
    imageUrl: 'Image URL',
    uploadImage: 'Upload Image',
    selectImage: 'Select Image',
    changeImage: 'Change Image',
    updateStatus: 'Update Status',
    statusUpdated: 'Order status updated successfully',

    // Messages
    loginSuccess: 'Login successful',
    loginError: 'Login error',
    signupSuccess: 'Account created successfully',
    signupError: 'Signup error',
    productAdded: 'Product added successfully',
    productUpdated: 'Product updated successfully',
    productDeleted: 'Product deleted successfully',
    error: 'An error occurred',

    // Favorites
    addToFavorites: 'Add to Favorites',
    removeFromFavorites: 'Remove from Favorites',
    noFavorites: 'No favorites yet',
    favoriteAdded: 'Added to favorites',
    favoriteRemoved: 'Removed from favorites',

    // Cart
    cart: 'Cart',
    addToCart: 'Add to Cart',
    removeFromCart: 'Remove from Cart',
    cartAdded: 'Added to cart',
    cartRemoved: 'Removed from cart',
    emptyCart: 'Your cart is empty',
    checkout: 'Checkout',
    total: 'Total',
    continueShopping: 'Continue Shopping',
    delivery: 'Delivery',
    deliveryAddress: 'Address',
    deliveryLocation: 'Delivery Location',
    governorate: 'Governorate',
    orderNotes: 'Order Notes',
    confirmDelivery: 'Confirm Delivery',
    deliverySuccess: 'Delivery order confirmed successfully!',
    deliveryError: 'An error occurred while confirming delivery',
    deliveryType: 'Delivery Type',
    pickup: 'Pickup from Store',
    deliveryCost: 'Delivery Cost',

    // About Page
    aboutTitle: 'About Us',
    aboutSubtitle: 'Our Story & Vision',
    ourStory: 'Our Story',
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',

    // Contact Page
    contactTitle: 'Contact',
    contactSubtitle: 'We\'re Here to Help',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    message: 'Your Message',
    sendMessage: 'Send Message',
    messageSent: 'Your message has been sent successfully',
    phone: 'Phone',
    // address: 'Address',
    workingHours: 'Working Hours',

    // Orders
    myOrders: 'My Orders',
    orderId: 'Order ID',
    orderDate: 'Order Date',
    orderStatus: 'Status',
    orderTotal: 'Total',
    orderDetails: 'Order Details',
    items: 'Items',
    status_pending: 'Pending',
    status_processing: 'Processing',
    status_shipped: 'Shipped',
    status_delivered: 'Delivered',
    status_cancelled: 'Cancelled',
    noOrders: 'You have no previous orders',
    startShopping: 'Start Shopping Now',
    backToOrders: 'Back to Orders',
    orderSummary: 'Order Summary',
    deliveryInfo: 'Delivery Info',

    // Footer
    copyright: '© 2025 Silver Rooster. All rights reserved.',


    
  },
};

export const useTranslation = (language: Language) => {
  return (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };
};
