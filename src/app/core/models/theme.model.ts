import { THEMES } from '@app/presentation/assets/enum/theme.enum';

export type ThemeProperty = { [key: string]: string };

export interface Theme {
  NAME: THEMES;
  PROPERTIES: ThemeProperty;
}
