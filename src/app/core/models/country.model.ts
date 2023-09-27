import { LANGUAGES } from '../i18n/constants/translate.constants';

export interface CountryConfig {
  countryCode?: string;
  currencyCode?: string;
  decimals?: number;
  phoneMask?: string;
  language?: LANGUAGES;
  phoneLength?: number;
  name?: string;
}
