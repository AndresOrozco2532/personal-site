import { RoutesMock } from '@app/core/models/routes-mock.model';
import { API_URLS } from './api.constants';

export const ROUTES_MOCK: RoutesMock[] = [
  // ********************
  // EMAILS
  // ********************
  {
    url: API_URLS.EMAILS.POST_CONTACT,
    data: {},
    method: 'POST',
  },
];
