import { CountryConfig } from '../models/country.model';

export const COUNTRY_CONSTANTS = {
  US: {
    countryCode: 'US',
    currencyCode: 'USD',
    decimals: 0,
    phoneMask: '00 000 000',
    language: 'en-US',
    phoneLength: 10,
    name: 'United States',
  } as CountryConfig,
  CO: {
    countryCode: 'CO',
    currencyCode: 'COP',
    decimals: 0,
    phoneMask: '000 000 0000',
    language: 'es-CO',
    phoneLength: 10,
    name: 'Colombia',
  } as CountryConfig,
};
