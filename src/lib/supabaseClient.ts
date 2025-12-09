// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// دالة للتأكد من أن localStorage متوفر
const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return {
      getItem: (key: string) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      },
      setItem: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
      },
      removeItem: (key: string) => {
        localStorage.removeItem(key);
      },
    };
  }
  return null;
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storage: getLocalStorage() || {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    },
  },
  global: {
    headers: {
      'x-application-name': 'chicken-shop',
    },
  },
});

// دالة للتحقق من اتصال Supabase
export const checkSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('products').select('id').limit(1);
    return { connected: !error, error };
  } catch (error) {
    return { connected: false, error };
  }
};