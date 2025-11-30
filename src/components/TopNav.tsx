import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useTranslation } from '../lib/translations';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../components/ui/navigation-menu';
import { 
  MenuIcon, 
  XIcon, 
  UserIcon, 
  LogOutIcon, 
  ShoppingCartIcon, 
  Instagram, 
  Heart, 
  Search,
  Home,
  Info,
  ShoppingBag,
  Phone,
  Package,
  Settings,
  PlusCircle,
  ClipboardList
} from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useFavorites } from '../hooks/useFavorites';
import { supabase } from '../lib/supabaseClient';

export const TopNav: React.FC = () => {
  const { language } = useAppStore();
  const { user, isAdmin, isGuest, logout } = useAuthStore();
  const t = useTranslation(language);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: cartItems } = useCart(user?.id);
  const { data: favoriteItems } = useFavorites(user?.id);
  
  const cartCount = cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const favoriteCount = favoriteItems?.length || 0;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  // تعريف الأيقونات لكل عنصر
  const navItems = [
    { label: t('home'), path: '/', icon: Home },
    { label: t('about'), path: '/about', icon: Info },
    { label: t('products'), path: '/products', icon: ShoppingBag },
    { label: t('contact'), path: '/contact', icon: Phone },
  ];

  if (user && !isAdmin && !isGuest) {
    navItems.push(
      { label: t('myOrders'), path: '/orders', icon: Package },
      { label: t('favorites'), path: '/favorites', icon: Heart }
    );
  }

  if (isAdmin) {
    navItems.push(
      { label: t('admin'), path: '/admin', icon: Settings },
      { label: t('addProduct'), path: '/admin/add', icon: PlusCircle }
    );
  }

  const instagramUrl = "https://www.instagram.com/aldeek_alfiddi?igsh=MTZ5MHNubzVzaDczaA%3D%3D&utm_source=qr";

  return (
    <nav className={`bg-card/95 backdrop-blur-md text-card-foreground border-b border-border/50 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-xl bg-card/98 backdrop-blur-lg' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <img 
                src="src/asset/IMG_0192.JPG" 
                alt={t('siteName')}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-primary/20 group-hover:border-primary/40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl -z-10 transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-300" />
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          className={`px-4 py-2 transition-all font-medium cursor-pointer rounded-lg relative group flex items-center gap-2 ${
                            location.pathname === item.path 
                              ? 'text-primary bg-primary/10' 
                              : 'text-foreground hover:text-primary hover:bg-muted/50'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" strokeWidth={2} />
                          {item.label}
                          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                            location.pathname === item.path ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                          }`} />
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
           

              <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
                <LanguageToggle />
                <ThemeToggle />
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-foreground hover:text-pink-500 transition-all duration-300 hover:scale-110 rounded-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
              
              {/* Action Buttons */}
              {user && !isAdmin && !isGuest && (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => navigate('/favorites')}
                    variant="ghost"
                    size="icon"
                    className="bg-transparent text-foreground hover:text-red-500 hover:bg-red-50 relative rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all duration-300 ${
                        favoriteCount > 0 ? 'fill-red-500 text-red-500' : ''
                      }`} 
                      strokeWidth={2} 
                    />
                    {favoriteCount > 0 && (
                      <span className="absolute -top-1 -end-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold shadow-lg animate-pulse">
                        {favoriteCount > 9 ? '9+' : favoriteCount}
                      </span>
                    )}
                  </Button>
                  
                  <Button
                    onClick={() => navigate('/cart')}
                    variant="ghost"
                    size="icon"
                    className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10 relative rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingCartIcon className="w-5 h-5" strokeWidth={2} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -end-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold shadow-lg animate-pulse">
                        {cartCount > 9 ? '9+' : cartCount}
                      </span>
                    )}
                  </Button>
                </div>
              )}
              
              {/* User Section */}
              {user || isGuest ? (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg">
                    <div className={`w-8 h-8 ${isGuest ? 'bg-muted' : 'bg-gradient-to-r from-blue-500 to-purple-600'} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105`}>
                      <UserIcon className={`w-4 h-4 ${isGuest ? 'text-muted-foreground' : 'text-white'}`} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-foreground hidden xl:block">
                      {isGuest ? (language === 'ar' ? 'ضيف' : 'Guest') : user?.email?.split('@')[0]}
                    </span>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                    className="bg-transparent text-foreground hover:bg-destructive/10 hover:text-destructive font-normal rounded-lg transition-all duration-300"
                  >
                    <LogOutIcon className="w-4 h-4 me-2" strokeWidth={2} />
                    {t('logout')}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => navigate('/login')}
                    variant="ghost"
                    className="bg-transparent text-foreground hover:bg-muted hover:text-foreground font-normal rounded-lg transition-all duration-300"
                  >
                    {t('login')}
                  </Button>
                  <Button
                    onClick={() => navigate('/signup')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 font-normal shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg hover:scale-105"
                  >
                    {t('signup')}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-1 sm:gap-2">
            {/* Search Button Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="bg-transparent text-foreground hover:bg-muted hover:text-foreground transition-all duration-300"
            >
              {/* <Search className="w-5 h-5" /> */}
            </Button>

            {/* Favorite & Cart Buttons */}
            {user && !isAdmin && !isGuest && (
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => navigate('/favorites')}
                  variant="ghost"
                  size="icon"
                  className="bg-transparent text-foreground hover:text-red-500 hover:bg-red-50 relative transition-all duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 transition-all duration-300 ${
                      favoriteCount > 0 ? 'fill-red-500 text-red-500' : ''
                    }`} 
                    strokeWidth={2} 
                  />
                  {favoriteCount > 0 && (
                    <span className="absolute -top-1 -end-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold shadow-lg">
                      {favoriteCount}
                    </span>
                  )}
                </Button>
                
                <Button
                  onClick={() => navigate('/cart')}
                  variant="ghost"
                  size="icon"
                  className="bg-transparent text-foreground hover:text-primary hover:bg-primary/10 relative transition-all duration-300"
                >
                  <ShoppingCartIcon className="w-5 h-5" strokeWidth={2} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -end-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            )}
            
            <LanguageToggle />
            <ThemeToggle />
            
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:text-pink-500 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" strokeWidth={2} />
            </a>

            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="bg-transparent text-foreground hover:bg-muted hover:text-foreground transition-all duration-300 relative"
            >
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6 transform rotate-90 transition-transform duration-300" strokeWidth={2} />
              ) : (
                <MenuIcon className="w-6 h-6 transform rotate-0 transition-transform duration-300" strokeWidth={2} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Advanced Animations */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        mobileMenuOpen 
          ? 'max-h-[80vh] opacity-100 bg-card/95 backdrop-blur-md border-t border-border' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className={`transform transition-all duration-700 ease-out ${
          mobileMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-4 opacity-0'
        }`}>
          <div className="px-6 py-6 space-y-4">
            {/* User Info */}
            {user && (
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl mb-4 border border-primary/20">
                <div className={`w-12 h-12 ${isGuest ? 'bg-muted' : 'bg-gradient-to-r from-blue-500 to-purple-600'} rounded-full flex items-center justify-center transition-all duration-300`}>
                  <UserIcon className={`w-6 h-6 ${isGuest ? 'text-muted-foreground' : 'text-white'}`} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">
                    {isGuest ? (language === 'ar' ? 'ضيف' : 'Guest') : user?.email?.split('@')[0]}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Items with Real Icons */}
            <div className="grid gap-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-muted/50 border border-transparent hover:border-primary/20 ${
                      location.pathname === item.path 
                        ? 'bg-primary/10 text-primary border-primary/30' 
                        : 'text-foreground'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: mobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <IconComponent className="w-5 h-5" strokeWidth={2} />
                    <span className="font-medium flex-1">{item.label}</span>
                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="pt-4 border-t border-border/50">
              {user ? (
                <Button
                  onClick={handleLogout}
                  variant="ghost"
                  className="w-full justify-center bg-destructive/10 text-destructive hover:bg-destructive/20 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <LogOutIcon className="w-5 h-5 me-3" strokeWidth={2} />
                  {t('logout')}
                </Button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    variant="ghost"
                    className="bg-muted/50 text-foreground hover:bg-muted font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {t('login')}
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/signup');
                      setMobileMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('signup')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};