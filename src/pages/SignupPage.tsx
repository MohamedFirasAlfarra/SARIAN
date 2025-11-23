import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useTranslation } from '../lib/translations';
import { supabase } from '../lib/supabaseClient';
import { Toast } from '../components/Toast';
import { UserPlusIcon, CheckCircleIcon, AlertCircleIcon, EyeIcon } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useAppStore();
  const { setUser, setGuestMode } = useAuthStore();
  const t = useTranslation(language);

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState({
    open: false,
    title: '',
    variant: 'success' as 'success' | 'error',
  });

  const validateEmail = (email: string) => /^[^\s@]+@gmail\.com$/.test(email);
  const validatePhone = (phone: string) => /^\+963\d{9}$/.test(phone);
  const validatePassword = (password: string) => password.length >= 8;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!age || +age < 1 || +age > 120) newErrors.age = 'Valid age required';
    if (!validatePhone(phone)) newErrors.phone = 'Invalid phone';
    if (!address.trim()) newErrors.address = 'Address required';
    if (!validateEmail(email)) newErrors.email = 'Only Gmail allowed';
    if (!validatePassword(password)) newErrors.password = 'Min 8 chars';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords mismatch';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { fullName, age: +age, phone, address }
      }
    });

    if (error) throw error;
    const user = data.user;
    if (!user) throw new Error("Signup failed");
    const { data: profile, error: profileError } = await supabase
  .from("profiles")
  .select("role")
  .eq("id", user.id)
  .limit(1)
  .maybeSingle();


    setUser({
      id: user.id,
      email: user.email ?? "",
      role: profile?.role ?? "user",
    });

    setToast({
      open: true,
      title: t("signupSuccess"),
      variant: "success",
    });

    setTimeout(() => navigate("/"), 800);

  } catch (err) {
    setToast({
      open: true,
      title: t("signupError"),
      variant: "error",
    });
  } finally {
    setLoading(false);
  }
};

    const handleGuestMode = () => {
    setGuestMode(true);
    setToast({
      open: true,
      title: language === 'ar' ? 'مرحباً بك كضيف!' : 'Welcome as Guest!',
      variant: 'success',
    });
    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div className="transition-page min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-2xl p-8 md:p-10 bg-card/95 backdrop-blur-sm text-card-foreground border-border shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <UserPlusIcon className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2 text-center">
          {t('signup')}
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          {language === 'ar' ? 'أنشئ حسابك الجديد' : 'Create your new account'}
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName" className="text-foreground mb-2 block font-medium">
              {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
            </Label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setErrors({ ...errors, fullName: '' });
              }}
              placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              className={`bg-background text-foreground border-border h-12 ${errors.fullName ? 'border-destructive' : ''}`}
            />
            {errors.fullName && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <Label htmlFor="age" className="text-foreground mb-2 block font-medium">
              {language === 'ar' ? 'العمر' : 'Age'}
            </Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="120"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setErrors({ ...errors, age: '' });
              }}
              placeholder={language === 'ar' ? 'أدخل عمرك' : 'Enter your age'}
              className={`bg-background text-foreground border-border h-12 ${errors.age ? 'border-destructive' : ''}`}
            />
            {errors.age && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.age}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-foreground mb-2 block font-medium">
              {t('mobileNumber')}
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors({ ...errors, phone: '' });
              }}
              placeholder="+9639XXXXXXXX"
              maxLength={13} // +963 + 9 digits = 13
              className={`bg-background text-foreground border-border h-12 ${errors.phone ? 'border-destructive' : ''}`}
              dir="ltr"
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-foreground mb-2 block font-medium">
              {t('address')}
            </Label>
            <Input
              id="address"
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setErrors({ ...errors, address: '' });
              }}
              placeholder={language === 'ar' ? 'أدخل عنوانك' : 'Enter your address'}
              className={`bg-background text-foreground border-border h-12 ${errors.address ? 'border-destructive' : ''}`}
            />
            {errors.address && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.address}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-foreground mb-2 block font-medium">
              {t('email')}
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: '' });
              }}
              placeholder="example@gmail.com"
              className={`bg-background text-foreground border-border h-12 ${errors.email ? 'border-destructive' : ''}`}
              dir="ltr"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password" className="text-foreground mb-2 block font-medium">
              {t('password')}
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: '' });
              }}
              placeholder={language === 'ar' ? '8 أحرف على الأقل' : 'At least 8 characters'}
              className={`bg-background text-foreground border-border h-12 ${errors.password ? 'border-destructive' : ''}`}
            />
            {errors.password && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="confirmPassword" className="text-foreground mb-2 block font-medium">
              {t('confirmPassword')}
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors({ ...errors, confirmPassword: '' });
              }}
              placeholder={language === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter password'}
              className={`bg-background text-foreground border-border h-12 ${errors.confirmPassword ? 'border-destructive' : ''}`}
            />
            {errors.confirmPassword && (
              <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                <AlertCircleIcon className="w-4 h-4" />
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-medium h-12 text-base shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            {loading ? (
              language === 'ar' ? 'جاري التحميل...' : 'Loading...'
            ) : (
              <>
                <CheckCircleIcon className="w-5 h-5 me-2" strokeWidth={2} />
                {t('signup')}
              </>
            )}
          </Button>
        </form>

        <div className="mt-8 space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                {language === 'ar' ? 'أو' : 'Or'}
              </span>
            </div>
          </div>

          <Button
            onClick={handleGuestMode}
            variant="outline"
            className="w-full bg-muted/50 text-foreground border-border hover:bg-muted hover:text-foreground font-medium h-12"
            size="lg"
          >
            <EyeIcon className="w-5 h-5 me-2" strokeWidth={2} />
            {t('continueAsGuest')}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            {t('guestModeDescription')}
          </p>

          <div className="text-center pt-4">
            <p className="text-muted-foreground mb-2">
              {language === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}
            </p>
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
            >
              {t('login')}
            </Link>
          </div>
        </div>
      </Card>

      <Toast
        open={toast.open}
        onOpenChange={(open) => setToast({ ...toast, open })}
        title={toast.title}
        variant={toast.variant}
      />
    </div>
  );
};




