import { ThemeProperty } from '@app/core/models/theme.model';
import * as MISCELLANY_FONTS from '../miscellany/fonts';

const PRIMARY_FONTS: ThemeProperty = {
  '--font-primary-black': MISCELLANY_FONTS.ROBOTO_BLACK,
  '--font-primary-blackitalic': MISCELLANY_FONTS.ROBOTO_BLACKITALIC,
  '--font-primary-bold': MISCELLANY_FONTS.ROBOTO_BOLD,
  '--font-primary-bolditalic': MISCELLANY_FONTS.ROBOTO_BOLDITALIC,
  '--font-primary-italic': MISCELLANY_FONTS.ROBOTO_ITALIC,
  '--font-primary-light': MISCELLANY_FONTS.ROBOTO_LIGHT,
  '--font-primary-lightitalic': MISCELLANY_FONTS.ROBOTO_LIGHTITALIC,
  '--font-primary-medium': MISCELLANY_FONTS.ROBOTO_MEDIUM,
  '--font-primary-mediumitalic': MISCELLANY_FONTS.ROBOTO_MEDIUMITALIC,
  '--font-primary-regular': MISCELLANY_FONTS.ROBOTO_REGULAR,
  '--font-primary-thin': MISCELLANY_FONTS.ROBOTO_THIN,
  '--font-primary-thinitalic': MISCELLANY_FONTS.ROBOTO_THINITALIC,
};

const SECONDARY_FONTS: ThemeProperty = {
  '--font-secondary-black': MISCELLANY_FONTS.POPPINS_BLACK,
  '--font-secondary-blackitalic': MISCELLANY_FONTS.POPPINS_BLACKITALIC,
  '--font-secondary-bold': MISCELLANY_FONTS.POPPINS_BOLD,
  '--font-secondary-bolditalic': MISCELLANY_FONTS.POPPINS_BOLDITALIC,
  '--font-secondary-extrabold': MISCELLANY_FONTS.POPPINS_EXTRABOLD,
  '--font-secondary-extrabolditalic': MISCELLANY_FONTS.POPPINS_EXTRABOLDITALIC,
  '--font-secondary-extralight': MISCELLANY_FONTS.POPPINS_EXTRALIGHT,
  '--font-secondary-extralightitalic':
    MISCELLANY_FONTS.POPPINS_EXTRALIGHTITALIC,
  '--font-secondary-italic': MISCELLANY_FONTS.POPPINS_ITALIC,
  '--font-secondary-light': MISCELLANY_FONTS.POPPINS_LIGHT,
  '--font-secondary-lightitalic': MISCELLANY_FONTS.POPPINS_LIGHTITALIC,
  '--font-secondary-medium': MISCELLANY_FONTS.POPPINS_MEDIUM,
  '--font-secondary-mediumitalic': MISCELLANY_FONTS.POPPINS_MEDIUMITALIC,
  '--font-secondary-regular': MISCELLANY_FONTS.POPPINS_REGULAR,
  '--font-secondary-semibold': MISCELLANY_FONTS.POPPINS_SEMIBOLD,
  '--font-secondary-semibolditalic': MISCELLANY_FONTS.POPPINS_SEMIBOLDITALIC,
  '--font-secondary-thin': MISCELLANY_FONTS.POPPINS_THIN,
  '--font-secondary-thinitalic': MISCELLANY_FONTS.POPPINS_THINITALIC,
};

// Text commons sizes
const TEXT_SIZES: ThemeProperty = {
  '--text-font-size-extrasmall': '12px',
  '--text-font-size-small': '14px',
  '--text-font-size-normal': '16px',
  '--text-font-size-big': '18px',
  '--text-font-size-extrabig': '20px',
};

const TEXT_LINE_HEIGHT: ThemeProperty = {
  '--text-line-height-extrasmall': '14px',
  '--text-line-height-small': '16px',
  '--text-line-height-normal': '18px',
  '--text-line-height-big': '20px',
  '--text-line-height-extrabig': '24px',
};

const TITLE_SIZES: ThemeProperty = {
  '--title-font-size-1': '38px',
  '--title-font-size-2': '28px',
  '--title-font-size-3': '20px',
  '--title-font-size-4': '18px',
  '--title-font-size-5': '17px',
  '--title-font-size-6': '16px',
};

const TITLE_LINE_HEIGHT: ThemeProperty = {
  '--title-line-height-1': '66px',
  '--title-line-height-2': '',
  '--title-line-height-3': '',
  '--title-line-height-4': '22px',
  '--title-line-height-5': '',
  '--title-line-height-6': '',
};

export const FONTS: ThemeProperty = {
  ...PRIMARY_FONTS,
  ...SECONDARY_FONTS,
  ...TEXT_SIZES,
  ...TEXT_LINE_HEIGHT,
  ...TITLE_SIZES,
  ...TITLE_LINE_HEIGHT,
};
