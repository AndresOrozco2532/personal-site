import { Theme } from '@app/core/models/theme.model';
import { DARK_THEME } from '@app/presentation/assets/themes/dark/dark.theme';

export const AVAILABLE_THEMES: { [key: string]: Theme } = {
  DEFAULT_THEME: DARK_THEME,
};
