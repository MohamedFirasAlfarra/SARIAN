// stores/useAuthStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAdmin: boolean;
  isGuest: boolean;
  lastActivity: number;
  setUser: (user: User | null) => void;
  setGuestMode: (isGuest: boolean) => void;
  updateLastActivity: () => void;
  logout: () => Promise<void>;
  clear: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAdmin: false,
      isGuest: false,
      lastActivity: Date.now(),

      setUser: (user) =>
        set({
          user,
          isAdmin: user?.role === 'admin',
          isGuest: false,
          lastActivity: Date.now(),
        }),

      setGuestMode: (isGuest) =>
        set({
          isGuest,
          user: null,
          isAdmin: false,
          lastActivity: Date.now(),
        }),

      updateLastActivity: () =>
        set({
          lastActivity: Date.now(),
        }),

      logout: async () => {
        const { supabase } = await import('../lib/supabaseClient');
        await supabase.auth.signOut();
        set({
          user: null,
          isAdmin: false,
          isGuest: false,
          lastActivity: Date.now(),
        });
      },

      clear: () =>
        set({
          user: null,
          isAdmin: false,
          isGuest: false,
          lastActivity: Date.now(),
        }),
    }),
    {
      name: 'auth-storage',
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);

// دالة مساعدة للتحقق من انتهاء الجلسة
export const checkSessionExpiry = () => {
  const { lastActivity } = useAuthStore.getState();
  const TWELVE_HOURS = 12 * 60 * 60 * 1000; // 12 ساعة
  
  if (Date.now() - lastActivity > TWELVE_HOURS) {
    useAuthStore.getState().clear();
    return true;
  }
  
  useAuthStore.getState().updateLastActivity();
  return false;
};