import { Theme } from '@app/core/models/theme.model';
import { THEMES } from '@app/presentation/assets/enum/theme.enum';
import { DARK_THEME } from '@app/presentation/assets/themes/dark/dark.theme';

export const AVAILABLE_THEMES: { [key: string]: Theme } = {
  [THEMES.DARK]: DARK_THEME,
};
