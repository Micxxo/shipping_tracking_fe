export interface Couriers {
  slug: string;
  name: string;
  phone: boolean;
  other_name: boolean;
  web_url: string;
  required_fields: Array<string>;
  optional_fields: Array<string>;
  default_language: string;
  support_languages: Array<string>;
  service_from_country_iso3: Array<string>;
}
