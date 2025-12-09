// components/SessionManager.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore, checkSessionExpiry } from '../stores/useAuthStore';

export const SessionManager: React.FC = () => {
  const navigate = useNavigate();
  const { user, isGuest } = useAuthStore();

  useEffect(() => {
    // تحديث النشاط عند تفاعل المستخدم
    const updateActivity = () => {
      useAuthStore.getState().updateLastActivity();
    };

    // إضافة مستمعات الأحداث
    window.addEventListener('click', updateActivity);
    window.addEventListener('keydown', updateActivity);
    window.addEventListener('scroll', updateActivity);
    window.addEventListener('mousemove', updateActivity);

    // فحص انتهاء الجلسة كل دقيقة
    const interval = setInterval(() => {
      const expired = checkSessionExpiry();
      if (expired && (user || isGuest)) {
        console.log('⏰ انتهت جلسة المستخدم بسبب عدم النشاط');
        if (user) {
          navigate('/login');
        }
      }
    }, 60000); // كل دقيقة

    // فحص عند التركيز على النافذة
    const handleFocus = () => {
      const expired = checkSessionExpiry();
      if (expired && (user || isGuest)) {
        console.log('⏰ انتهت الجلسة عند التركيز');
        if (user) {
          navigate('/login');
        }
      }
    };

    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', updateActivity);
      window.removeEventListener('keydown', updateActivity);
      window.removeEventListener('scroll', updateActivity);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('focus', handleFocus);
    };
  }, [user, isGuest, navigate]);

  return null; // لا يعرض أي شيء
};