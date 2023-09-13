import { FEATURES } from '@app/core/constants/feature.constants';

import { AppEffects } from './app/app.effects';
import { AppReducers } from './app/app.reducers';
import { AppState } from './app/app.state';

export interface RootState {
  app: AppState;
  // landing: LandingState;
}
export const appReducers = {
  [FEATURES.APP.STORE_NAME]: AppReducers,
  // [FEATURES.PUBLIC.PAGES.LANDING.STORE_NAME]: LandingReducers,
};

export const appEffects = [
  AppEffects,
  // LandingEffects,
];
