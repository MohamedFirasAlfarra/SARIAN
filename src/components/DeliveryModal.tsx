import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useTranslation } from '../lib/translations';
import { useClearCart } from '../hooks/useCart';
import { Product } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/ui/dailog';
import { Toast } from './Toast';
import { TruckIcon, MapPinIcon, HomeIcon, Building2Icon, MessageSquareIcon, CheckCircleIcon } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface DeliveryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  cartItems: { id: string; product_id: string; quantity: number; product: Product }[];
}

export const DeliveryModal: React.FC<DeliveryModalProps> = ({ open, onOpenChange, userId, cartItems }) => {
  const navigate = useNavigate();
  const { language } = useAppStore();
  const t = useTranslation(language);
  const clearCart = useClearCart();

  const [deliveryData, setDeliveryData] = useState({
    address: '',
    deliveryLocation: '',
    governorate: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ open: boolean; title: string; variant: 'success' | 'error' }>({
    open: false,
    title: '',
    variant: 'success',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setDeliveryData((prev) => ({ ...prev, [id]: value }));
  };

  const handleConfirmDelivery = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // In a real application, you would send this data to your backend/Supabase
    // For this demo, we'll simulate a successful delivery confirmation
    console.log('Confirming delivery for user:', userId);
    console.log('Cart Items:', cartItems);
    console.log('Delivery Data:', deliveryData);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Clear the cart after successful delivery confirmation
      await clearCart.mutateAsync(userId);

      setToast({
        open: true,
        title: t('deliverySuccess'),
        variant: 'success',
      });
      onOpenChange(false); // Close modal
      navigate('/'); // Navigate to home or order confirmation page
    } catch (error) {
      console.error('Delivery confirmation error:', error);
      setToast({
        open: true,
        title: t('deliveryError'),
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-lg bg-card text-card-foreground border-border">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TruckIcon className="w-8 h-8 text-primary" strokeWidth={2} />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl font-serif font-bold text-foreground">
              {t('confirmDelivery')}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleConfirmDelivery} className="space-y-5 py-4">
            {/* Address */}
            <div>
              <Label htmlFor="address" className="text-foreground mb-2 block font-medium">
                {t('deliveryAddress')}
              </Label>
              <Input
                id="address"
                type="text"
                value={deliveryData.address}
                onChange={handleInputChange}
                required
                placeholder={language === 'ar' ? 'مثال: شارع الحمراء، بناء رقم 123' : 'Ex: Hamra Street, Building #123'}
                className="bg-background text-foreground border-border h-12"
              />
            </div>

            {/* Delivery Location */}
            <div>
              <Label htmlFor="deliveryLocation" className="text-foreground mb-2 block font-medium">
                {t('deliveryLocation')}
              </Label>
              <Input
                id="deliveryLocation"
                type="text"
                value={deliveryData.deliveryLocation}
                onChange={handleInputChange}
                required
                placeholder={language === 'ar' ? 'مثال: بالقرب من حديقة عامة' : 'Ex: Near Public Garden'}
                className="bg-background text-foreground border-border h-12"
              />
            </div>

            {/* Governorate */}
            <div>
              <Label htmlFor="governorate" className="text-foreground mb-2 block font-medium">
                {t('governorate')}
              </Label>
              <Input
                id="governorate"
                type="text"
                value={deliveryData.governorate}
                onChange={handleInputChange}
                required
                placeholder={language === 'ar' ? 'مثال: دمشق' : 'Ex: Damascus'}
                className="bg-background text-foreground border-border h-12"
              />
            </div>

            {/* Order Notes */}
            <div>
              <Label htmlFor="notes" className="text-foreground mb-2 block font-medium">
                {t('orderNotes')}
              </Label>
              <Textarea
                id="notes"
                value={deliveryData.notes}
                onChange={handleInputChange}
                rows={3}
                placeholder={language === 'ar' ? 'أي ملاحظات إضافية لطلبك...' : 'Any additional notes for your order...'}
                className="bg-background text-foreground border-border"
              />
            </div>

            <DialogFooter className="flex flex-col gap-3 sm:flex-col pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 font-medium shadow-lg"
                size="lg"
              >
                <CheckCircleIcon className="w-5 h-5 me-2" strokeWidth={2} />
                {loading ? (language === 'ar' ? 'جاري التأكيد...' : 'Confirming...') : t('confirmDelivery')}
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
                className="w-full bg-card text-card-foreground border-border hover:bg-muted hover:text-foreground font-medium"
                size="lg"
              >
                {t('cancel')}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Toast
        open={toast.open}
        onOpenChange={(open) => setToast({ ...toast, open })}
        title={toast.title}
        variant={toast.variant}
      />
    </>
  );
};
