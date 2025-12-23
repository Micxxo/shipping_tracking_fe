import { Couriers } from './courier';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface TrackingCourierResponse {
  total: number;
  couriers: Array<Couriers>;
}
