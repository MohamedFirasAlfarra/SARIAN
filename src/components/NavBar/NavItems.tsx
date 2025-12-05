import {
  Home,
  Info,
  ShoppingBag,
  Phone,
  Package,
  Settings,
  Heart
} from 'lucide-react';

interface NavItemsProps {
  language: string;
  user: any;
  isAdmin: boolean;
  isGuest: boolean;
  t: (key: string) => string;
}

export const navItems = ({ language, user, isAdmin, isGuest, t }: NavItemsProps) => {
  const items = [
    { label: t('home'), path: '/', icon: Home, color: 'text-blue-500' },
    { label: t('about'), path: '/about', icon: Info, color: 'text-green-500' },
    { label: t('products'), path: '/products', icon: ShoppingBag, color: 'text-purple-500' },
    { label: t('contact'), path: '/contact', icon: Phone, color: 'text-pink-500' },
  ];

  if (user && !isAdmin && !isGuest) {
    items.push(
      { label: t('myOrders'), path: '/orders', icon: Package, color: 'text-orange-500' },
      { label: t('favorites'), path: '/favorites', icon: Heart, color: 'text-red-500' }
    );
  }

  if (isAdmin) {
    items.push(
      { label: t('admin'), path: '/admin', icon: Settings, color: 'text-yellow-500' },
    );
  }

  return items;
};