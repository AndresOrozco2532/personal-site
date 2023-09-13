import { AVAILABLE_THEMES } from '@app/core/constants/themes.constant';
import { DEFAULT_LANGUAGE } from '@app/core/i18n/constants/translate.constants';
import { Action, createReducer, on } from '@ngrx/store';
import {
  updateIsDesktopScreen,
  updateLanguage,
  updateTheme,
} from './app.actions';
import { AppState } from './app.state';

export const initialAppState: AppState = {
  language: DEFAULT_LANGUAGE,
  theme: AVAILABLE_THEMES.DEFAULT_THEME.NAME,
  isDesktopScreen: true,
};

const _appReducer = createReducer(
  initialAppState,
  on(updateLanguage, (state, { language }) => ({
    ...state,
    language,
  })),
  on(updateTheme, (state, { theme }) => ({
    ...state,
    theme,
  })),
  on(updateIsDesktopScreen, (state, { isDesktopScreen }) => ({
    ...state,
    isDesktopScreen,
    showSlideModal: isDesktopScreen,
  }))
);

export function AppReducers(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
