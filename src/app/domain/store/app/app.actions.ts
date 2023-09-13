import { LANGUAGES } from '@app/core/i18n/constants/translate.constants';
import { THEMES } from '@app/presentation/assets/enum/theme.enum';
import { createAction, props } from '@ngrx/store';

export const initApp = createAction('[App Global] Init App');

export const updateLanguage = createAction(
  '[App Global] Update Language',
  props<{ language: LANGUAGES }>()
);

export const updateTheme = createAction(
  '[App Global] Update theme',
  props<{ theme: THEMES }>()
);

export const updateIsDesktopScreen = createAction(
  '[App Global] Update screen size',
  props<{ isDesktopScreen: boolean }>()
);
