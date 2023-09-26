import { Action, createReducer, on } from '@ngrx/store';
import {
  sendContactEmail,
  sendContactEmailFailed,
  sendContactEmailSuccess,
} from './landing.actions';
import { LandingState } from './landing.state';

export const initialLandingState: LandingState = {
  isLoadingContact: false,
};

const _landingReducer = createReducer(
  initialLandingState,
  on(sendContactEmail, (state) => ({
    ...state,
    isLoadingContact: true,
  })),
  on(sendContactEmailSuccess, sendContactEmailFailed, (state) => ({
    ...state,
    isLoadingContact: false,
  }))
);

export function LandingReducers(
  state: LandingState | undefined,
  action: Action
) {
  return _landingReducer(state, action);
}
