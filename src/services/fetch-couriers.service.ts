import { COURIER_QUERY_KEY, QUERY_STALE_TIME } from '@/constants';
import { handleThrowServiceError } from '@/helpers/service-error';
import { useManageTrackingAPI } from '@/hooks';
import { ApiResponse, Couriers, ErrorResponse } from '@/interfaces';
import { useQuery } from '@tanstack/react-query';

export function useFetchCouriers({ enabled = true }: { enabled?: boolean }) {
  const { handleGetCouriers } = useManageTrackingAPI();

  return useQuery<ApiResponse<Array<Couriers>>, ErrorResponse>({
    enabled,
    queryFn: async () => {
      try {
        const response = await handleGetCouriers();
        return response;
      } catch (err: unknown) {
        handleThrowServiceError(err);
      }
    },
    queryKey: [COURIER_QUERY_KEY.FETCH_COURIERS],
    staleTime: QUERY_STALE_TIME, // 5 MIN
  });
}
