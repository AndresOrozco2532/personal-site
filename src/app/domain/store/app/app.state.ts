import { THEMES } from '@app/presentation/assets/enum/theme.enum';

export interface AppState {
  language: string;
  theme: THEMES;
  isDesktopScreen: boolean;
}
