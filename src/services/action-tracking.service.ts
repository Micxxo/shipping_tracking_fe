import { TRACKING_QUERY_KEY } from '@/constants';
import { handleThrowServiceError } from '@/helpers/service-error';
import { useManageTrackingAPI } from '@/hooks';
import { ErrorResponse, Tracking, TrackingParams } from '@/interfaces';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '../interfaces/response';

export function useActionTracking() {
  const { handleTrack } = useManageTrackingAPI();

  return useMutation<ApiResponse<Tracking>, ErrorResponse, TrackingParams>({
    mutationFn: async (payload: TrackingParams) => {
      try {
        return await handleTrack(payload);
      } catch (err: unknown) {
        return handleThrowServiceError(err);
      }
    },
    mutationKey: [TRACKING_QUERY_KEY.ACTION_TRACK],
  });
}
