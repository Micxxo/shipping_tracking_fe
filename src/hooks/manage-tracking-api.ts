import { axiosClient } from '@/helpers';
import { removeEmptyValues } from '@/helpers/remove-empty-values';
import { TrackingParams } from '@/interfaces';

export const useManageTrackingAPI = () => {
  const api = axiosClient();

  const handleTrack = async ({ ...params }: TrackingParams) => {
    const cleanedPayload = removeEmptyValues({ obj: params });
    const response = await api.post('/api/track', { ...cleanedPayload });
    if (!response.status) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.data;
  };

  const handleGetCouriers = async () => {
    const response = await api.get('/api/couriers');
    if (!response.status) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.data;
  };

  return { handleTrack, handleGetCouriers };
};
