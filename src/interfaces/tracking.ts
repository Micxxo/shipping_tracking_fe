/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TrackingParams {
  tracking_number: string;
  slug?: string;
}

export interface Tracking {
  id: string;
  legacy_id: string;
  created_at: string;
  updated_at: string;
  tracking_number: string;
  slug: string;
  active: boolean;
  custom_fields: {
    store_name: string;
    [key: string]: any;
  };
  transit_time?: number;
  origin_country_region: string;
  origin_state: string;
  origin_city: string;
  origin_postal_code: string;
  origin_raw_location: string;
  destination_country_region: string;
  destination_state: string;
  destination_city: string;
  destination_postal_code: string;
  destination_raw_location: string;
  courier_destination_country_region?: string;
  courier_estimated_delivery_date?: EstimatedDeliveryDate;
  note?: string;
  order_id: string;
  order_id_path: string;
  order_date?: string;
  shipment_package_count?: number;
  shipment_pickup_date?: string;
  shipment_delivery_date?: string;
  shipment_type?: string;
  shipment_weight?: {
    unit: string;
    value: number;
  };
  signed_by?: string;
  source?: string;
  tag?: string;
  subtag?: string;
  subtag_message?: string;
  title?: string;
  tracked_count?: number;
  last_mile_tracking_supported?: boolean;
  language?: string;
  checkpoints?: Checkpoint[];
  subscribed_smses?: string[];
  subscribed_emails?: string[];
  return_to_sender?: boolean;
  order_promised_delivery_date?: string;
  delivery_type?: string;
  pickup_location?: string;
  pickup_note?: string;
  courier_tracking_link?: string;
  first_attempted_at?: string;
  courier_redirect_link?: string;
  tracking_account_number?: string | null;
  tracking_key?: string | null;
  tracking_ship_date?: string;
  on_time_status?: string;
  on_time_difference?: number;
  order_tags?: string[];
  aftership_estimated_delivery_date?: EstimatedDeliveryDate;
  custom_estimated_delivery_date?: CustomEstimatedDeliveryDate;
  order_number?: string;
  first_estimated_delivery?: CustomEstimatedDeliveryDate;
  latest_estimated_delivery?: CustomEstimatedDeliveryDate;
  shipment_tags?: string[];
  courier_connection_id?: string;
  carbon_emissions?: {
    unit: string;
    value: number;
  };
  location_id?: string;
  shipping_method?: string;
  failed_delivery_attempts?: number;
  signature_requirement?: string;
  delivery_location_type?: string;
  aftership_tracking_url?: string;
  aftership_tracking_order_url?: string;
  first_mile?: Mile;
  last_mile?: Mile;
  customers?: Customer[];
}

export interface EstimatedDeliveryDate {
  estimated_delivery_date: string;
  estimated_delivery_date_min?: string;
  estimated_delivery_date_max?: string;
  confidence_code?: number;
}

export interface CustomEstimatedDeliveryDate {
  type: string;
  datetime: string;
  datetime_min?: string | null;
  datetime_max?: string | null;
  source?: string;
  revise_reason?: string;
}

export interface Mile {
  tracking_number: string;
  slug: string;
  transit_time?: string;
  courier_tracking_link?: string;
  courier_redirect_link?: string;
  source?: string;
}

export interface Checkpoint {
  created_at: string;
  slug: string;
  checkpoint_time: string;
  location?: string;
  city?: string;
  state?: string;
  zip?: string;
  coordinate?: any;
  country_region?: string;
  country_region_name?: string;
  message?: string;
  tag?: string;
  subtag?: string;
  subtag_message?: string;
  raw_tag?: string;
  events?: any[];
  source?: string;
}

export interface Customer {
  role: string;
  name: string;
  phone_number?: string;
  email?: string;
  language?: string;
}
