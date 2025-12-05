import React from 'react';
import { Button } from '../../components/ui/button';
import { MenuIcon, XIcon, Instagram, Heart } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface MobileControlsProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  user: any;
  isAdmin: boolean;
  isGuest: boolean;
  favoriteCount: number;
  instagramUrl: string;
  navigate: (path: string) => void;
}

export const MobileControls: React.FC<MobileControlsProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  user,
  isAdmin,
  isGuest,
  favoriteCount,
  instagramUrl,
  navigate
}) => {
  return (
    <div className="flex lg:hidden items-center gap-1 sm:gap-2">
      {/* Favorite Button */}
      {user && !isAdmin && !isGuest && (
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
      )}
      
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
        className="bg-transparent text-foreground hover:bg-muted hover:text-foreground transition-all duration-300 relative group"
      >
        <div className="relative">
          {mobileMenuOpen ? (
            <XIcon className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
          ) : (
            <MenuIcon className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
          )}
          {/* Animated Dots */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
            <div className={`w-1 h-1 rounded-full bg-primary transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-1 h-1 rounded-full bg-primary transition-all duration-300 delay-75 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-1 h-1 rounded-full bg-primary transition-all duration-300 delay-150 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          </div>
        </div>
      </Button>
    </div>
  );
};