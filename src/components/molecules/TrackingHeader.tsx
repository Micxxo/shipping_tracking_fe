import { Package } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useActionTracking } from '@/services/action-tracking.service';
import { useTrackingStore } from '@/stores';
import SelectCouriers from './SelectCouriers';

export const TrackingHeader = () => {
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);

  const {
    setIsTrackingLoading,
    setTrackingData,
    setTrackingError,
    selectedCourier,
  } = useTrackingStore();
  const tracking = useActionTracking();

  const handleClearStores = () => {
    setTrackingData(null);
    setTrackingError(null);
  };

  const handleTrack = () => {
    if (tracking.isPending || !trackingNumber) return;
    handleClearStores();
    setIsTrackingLoading(true);
    tracking.mutateAsync(
      {
        tracking_number: trackingNumber ?? '',
        slug: selectedCourier?.slug ?? undefined,
      },
      {
        onSettled: () => {
          setIsTrackingLoading(false);
        },
        onSuccess: (response) => {
          setTrackingData(response.data);
        },
        onError(error) {
          setTrackingError(error);
        },
      }
    );
  };

  const handleInputChange = (value: string) => {
    setTrackingNumber(value);

    // clear store if no value
    if (!value) handleClearStores();
  };

  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Package className="w-8 h-8 text-white" />
        <h1 className="text-2xl sm:text-3xl font-bold text-white">TrackUr</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full">
        <Input
          type="text"
          value={trackingNumber ?? ''}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
          placeholder="Enter tracking number"
          className="placeholder:text-white h-12 text-white"
        />
        <div className="flex items-center gap-2">
          <SelectCouriers />
          <Button
            onClick={handleTrack}
            disabled={!trackingNumber || tracking.isPending}
            className="h-12 cursor-pointer text-blue-600"
            variant={'secondary'}
          >
            Track
          </Button>
        </div>
      </div>
    </div>
  );
};
