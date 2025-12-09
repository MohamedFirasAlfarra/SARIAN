import React from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  MapPinIcon, 
  MailIcon, 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon,
  SendIcon,
  ClockIcon,
  ShieldIcon,
  TruckIcon,
  HeartIcon,
  ChevronUpIcon,
  SmartphoneIcon
} from 'lucide-react';

// Logo component
const Logo = ({ language }: { language: string }) => (
  <div className="flex items-center gap-3">
    <div className="relative w-16 h-16 bg-gradient-to-br from-primary via-secondary to-tertiary rounded-2xl flex items-center justify-center shadow-lg group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
      <div className="relative text-white font-bold text-3xl">SR</div>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
    </div>
    <div>
      <h1 className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {language === 'ar' ? 'الديك الفضي' : 'Silver Rooster'}
      </h1>
      <p className="text-xs text-muted-foreground mt-1">
        {language === 'ar' ? 'جودة تستحق الثقة' : 'Quality You Can Trust'}
      </p>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const { language } = useAppStore();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-background via-background to-card border-t border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
             <img 
                      src="https://c.animaapp.com/mhx6z2hgaXoALR/img/img_0192.JPG"
                    className="w-52 h-w-52 rounded-3xl object-cover border-2 border-primary/30 shadow-lg shadow-gray-300"
                  />
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              {language === 'ar' 
                ? 'نحن نلتزم بتقديم أفضل منتجات الدجاج الطازجة من مزارعنا المعتمدة مباشرة إلى مائدتك. جودة وسلامة وأمان في كل قضمة.'
                : 'We are committed to delivering the freshest chicken products from our certified farms directly to your table. Quality, safety, and trust in every bite.'}
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-4">
              {[
                { path: '/', label: language === 'ar' ? 'الرئيسية' : 'Home' },
                { path: '/about', label: language === 'ar' ? 'من نحن' : 'About Us' },
                { path: '/products', label: language === 'ar' ? 'المنتجات' : 'Products' },
                { path: '/contact', label: language === 'ar' ? 'اتصل بنا' : 'Contact Us' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-3 group py-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-muted rounded-full group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{language === 'ar' ? 'الهاتف' : 'Phone'}</p>
                  <div className="space-y-1 mt-1">
                    <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      0112245166
                    </p>
                    <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                     
                    +963994539997
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <MapPinIcon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{language === 'ar' ? 'العنوان' : 'Address'}</p>
                  <p className="text-muted-foreground mt-1 hover:text-secondary transition-colors cursor-pointer">
                    {language === 'ar' ? 'دمشق - دوار كفرسوسه - مقابل درج مؤسسة الوحدة' : 'Damascus - Kafr Souseh roundabout - opposite the steps of the Al-Wahda Foundation'}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-tertiary rounded-full"></span>
              {language === 'ar' ? 'تابعنا' : 'Follow Us'}
            </h3>
 
            <div className="bg-background/50 border border-border rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <ClockIcon className="w-5 h-5 text-green-500" />
                <h4 className="font-semibold text-foreground">
                  {language === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                </h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'ar' ? 'السبت - الخميس' : 'Sat - Thu'}</span>
                  <span className="text-foreground font-medium">10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: TruckIcon, text: language === 'ar' ? 'توصيل سريع' : 'Fast Delivery', color: 'text-primary' },
            { icon: ShieldIcon, text: language === 'ar' ? 'جودة مضمونة' : 'Quality Guaranteed', color: 'text-secondary' },
            { icon: ClockIcon, text: language === 'ar' ? '24/7 دعم' : '24/7 Support', color: 'text-green-500' },
            { icon: HeartIcon, text: language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction', color: 'text-red-500' }
          ].map((badge, index) => (
            <div 
              key={index} 
              className="bg-background/50 border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 hover:shadow-sm"
            >
              <div className={`${badge.color} p-2 rounded-lg bg-opacity-10`}>
                <badge.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </div>

       
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 group"
        aria-label={language === 'ar' ? 'العودة للأعلى' : 'Back to top'}
      >
        <ChevronUpIcon className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;