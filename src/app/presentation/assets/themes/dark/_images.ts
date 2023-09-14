import { ThemeProperty } from '@app/core/models/theme.model';
import * as MISCELLANY_IMAGES from '../miscellany/images';
import { ICONS_CSS_VAR, IMAGES_CSS_VAR } from '../miscellany/images';

export const IMAGES: ThemeProperty = {
  /***
    IMAGES
  **/
  // BACKGROUNDS
  [IMAGES_CSS_VAR.BACKGROUND]: `url(${MISCELLANY_IMAGES.IMAGE_BACKGROUND})`,
  // LOGOS
  [IMAGES_CSS_VAR.LOGO]: `url(${MISCELLANY_IMAGES.IMAGE_LOGO})`,
  // FIGURES
  [IMAGES_CSS_VAR.FIGURE_HERO]: `url(${MISCELLANY_IMAGES.IMAGE_FIGURE_HERO})`,
  /***
    ICONS
  **/
  // GENERAL
  [ICONS_CSS_VAR.CLOSE]: `url(${MISCELLANY_IMAGES.ICON_CLOSE})`,
};
