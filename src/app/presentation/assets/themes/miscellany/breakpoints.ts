import { ThemeProperty } from '@app/core/models/theme.model';

const MOBILE_S: string = '320px';
const MOBILE_M: string = '375px';
const MOBILE_L: string = '425px';
const TABLET: string = '768px';
const TABLET_L: string = '990px';
const LAPTOP: string = '1024px';
const LAPTOP_M: string = '1224px';
const LAPTOP_L: string = '1440px';
const LARGE: string = '2560px';

export const BREAKPOINTS: ThemeProperty = {
  '--mobile-s': MOBILE_S,
  '--mobile-m': MOBILE_M,
  '--mobile-l': MOBILE_L,
  '--tablet': TABLET,
  '--tablet-l': TABLET_L,
  '--laptop': LAPTOP,
  '--laptop-m': LAPTOP_M,
  '--laptop-l': LAPTOP_L,
  '--large': LARGE,
};
