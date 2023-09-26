import { FEATURES } from '@app/core/constants/feature.constants';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LandingState } from './landing.state';

export const getLandingFeatureState = createFeatureSelector<LandingState>(
  FEATURES.PUBLIC.PAGES.LANDING.STORE_NAME
);

export const selectIsLoadingContact = createSelector(
  getLandingFeatureState,
  (state: LandingState) => state?.isLoadingContact
);
