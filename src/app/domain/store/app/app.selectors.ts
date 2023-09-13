import { FEATURES } from '@app/core/constants/feature.constants';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const getAppFeatureState = createFeatureSelector<AppState>(
  FEATURES.APP.STORE_NAME
);

export const selectLanguage = createSelector(
  getAppFeatureState,
  (state: AppState) => state?.language
);

export const selectTheme = createSelector(
  getAppFeatureState,
  (state: AppState) => state?.theme
);

export const selectIsDesktopScreen = createSelector(
  getAppFeatureState,
  (state: AppState) => state?.isDesktopScreen
);
