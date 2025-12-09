// components/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuthStore } from '../stores/useAuthStore';

interface AuthContextType {
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ 
  loading: true,
  refreshUser: async () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { setUser, clear } = useAuthStore();

  // دالة لتحديث حالة المستخدم
  const refreshUser = useCallback(async () => {
    try {
      console.log('🔄 تحديث حالة المستخدم...');
      
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        console.log('❌ لا توجد جلسة نشطة');
        clear();
        return;
      }

      console.log('✅ جلسة موجودة:', session.user.email);

      // جلب بيانات الملف الشخصي
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (profileError) {
        console.error('❌ خطأ في جلب الملف الشخصي:', profileError);
        
        // إذا لم يكن هناك ملف شخصي، أنشئ واحداً افتراضي
        if (profileError.code === 'PGRST116') {
          const { error: insertError } = await supabase
            .from('profiles')
            .insert([{ 
              id: session.user.id, 
              email: session.user.email,
              role: 'user'
            }]);

          if (insertError) {
            console.error('❌ خطأ في إنشاء الملف الشخصي:', insertError);
          }
        }
      }

      // تحديث حالة المستخدم
      setUser({
        id: session.user.id,
        email: session.user.email || '',
        role: profile?.role || 'user',
      });

      console.log('✅ تم تحديث حالة المستخدم:', {
        id: session.user.id,
        email: session.user.email,
        role: profile?.role || 'user'
      });

    } catch (error) {
      console.error('❌ خطأ في تحديث المستخدم:', error);
      clear();
    }
  }, [setUser, clear]);

  // التأكد من الجلسة عند تحميل المكون
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        console.log('🚀 تهيئة المصادقة...');
        
        // انتظر 500ms للتأكد من أن كل شيء قد تحمّل
        await new Promise(resolve => setTimeout(resolve, 500));
        
        await refreshUser();
      } catch (error) {
        console.error('❌ خطأ في تهيئة المصادقة:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    // الاستماع لتغيرات حالة المصادقة
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('🔔 تغير حالة المصادقة:', event);
        
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          await refreshUser();
        } else if (event === 'SIGNED_OUT') {
          clear();
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [refreshUser, clear]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);