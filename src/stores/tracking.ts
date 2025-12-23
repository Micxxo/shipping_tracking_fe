import { Couriers, ErrorResponse, Tracking } from '@/interfaces';
import { create } from 'zustand';

interface TrackingStoreProps {
  trackingData: Tracking | null;
  isTrackingLoading: boolean;
  trackingError: ErrorResponse | null;
  selectedCourier: Couriers | null;
  setSelectedCourier: (data: Couriers | null) => void;
  setTrackingError: (data: ErrorResponse | null) => void;
  setTrackingData: (data: Tracking | null) => void;
  setIsTrackingLoading: (status: boolean) => void;
}

export const useTrackingStore = create<TrackingStoreProps>((set) => ({
  isTrackingLoading: false,
  trackingData: null,
  trackingError: null,
  selectedCourier: null,
  setSelectedCourier: (selectedCourier) => set({ selectedCourier }),
  setTrackingError: (trackingError) => set({ trackingError }),
  setTrackingData: (trackingData) => set({ trackingData }),
  setIsTrackingLoading: (isTrackingLoading) => set({ isTrackingLoading }),
}));
