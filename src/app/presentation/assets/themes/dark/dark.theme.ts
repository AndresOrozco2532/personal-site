import { Theme } from '@app/core/models/theme.model';
import { THEMES } from '../../enum/theme.enum';
import { BREAKPOINTS } from '../miscellany/breakpoints';
import { COLORS } from './_colors';
import { FONTS } from './_fonts';
import { IMAGES } from './_images';

export const DARK_THEME: Theme = {
  NAME: THEMES.DARK,
  PROPERTIES: {
    ...BREAKPOINTS,
    ...COLORS,
    ...FONTS,
    ...IMAGES,
  },
};
