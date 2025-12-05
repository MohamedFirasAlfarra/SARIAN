import React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../../components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { LanguageToggle } from '../LanguageToggle';
import { ThemeToggle } from '../ThemeToggle';
import { 
  Heart,
  ShoppingCartIcon,
  Instagram,
  UserIcon,
  LogOutIcon
} from 'lucide-react';
import { navItems } from './NavItems';

interface DesktopNavigationProps {
  language: string;
  location: any;
  user: any;
  isAdmin: boolean;
  isGuest: boolean;
  t: (key: string) => string;
  cartCount: number;
  favoriteCount: number;
  instagramUrl: string;
  handleLogout: () => void;
  navigate: (path: string) => void;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  language,
  location,
  user,
  isAdmin,
  isGuest,
  t,
  cartCount,
  favoriteCount,
  instagramUrl,
  handleLogout,
  navigate
}) => {
  const items = navItems({ language, user, isAdmin, isGuest, t });

  return (
    <div className="hidden lg:flex items-center gap-8">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-1">
          {items.map((item) => {
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
  );
};