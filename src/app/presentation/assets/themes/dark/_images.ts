import { ThemeProperty } from '@app/core/models/theme.model';
import * as MISCELLANY_IMAGES from '../miscellany/images';
import { ICONS_CSS_VAR, IMAGES_CSS_VAR } from '../miscellany/images';

export const IMAGES: ThemeProperty = {
  /***
    ICONS
  **/
  // GENERAL
  [ICONS_CSS_VAR.SLIDER_THUMB]: `url(${MISCELLANY_IMAGES.ICON_SLIDER_THUMB})`,
  [ICONS_CSS_VAR.CHECK]: `url(${MISCELLANY_IMAGES.ICON_CHECK})`,
  // BACKGROUNDS
  [ICONS_CSS_VAR.BACKGROUND]: `url(${MISCELLANY_IMAGES.ICON_BACKGROUND})`,
  // LOGOS
  [ICONS_CSS_VAR.LOGO]: `url(${MISCELLANY_IMAGES.ICON_LOGO})`,
  // FIGURES
  [ICONS_CSS_VAR.FIGURE_HERO]: `url(${MISCELLANY_IMAGES.ICON_FIGURE_HERO})`,
  [ICONS_CSS_VAR.FIGURE_SKILLS]: `url(${MISCELLANY_IMAGES.ICON_FIGURE_SKILLS})`,
  // SECTIONS
  [ICONS_CSS_VAR.SECTION_HERO]: `url(${MISCELLANY_IMAGES.ICON_SECTION_HERO})`,
  [ICONS_CSS_VAR.SECTION_SKILLS]: `url(${MISCELLANY_IMAGES.ICON_SECTION_SKILLS})`,
  [ICONS_CSS_VAR.SECTION_SERVICES]: `url(${MISCELLANY_IMAGES.ICON_SECTION_SERVICES})`,
  [ICONS_CSS_VAR.SECTION_WORK_TOGETHER]: `url(${MISCELLANY_IMAGES.ICON_SECTION_WORK_TOGETHER})`,
  // TOOLS
  [ICONS_CSS_VAR.TOOL_ANGULAR]: `url(${MISCELLANY_IMAGES.ICON_TOOL_ANGULAR})`,
  [ICONS_CSS_VAR.TOOL_NGRX]: `url(${MISCELLANY_IMAGES.ICON_TOOL_NGRX})`,
  [ICONS_CSS_VAR.TOOL_REACT]: `url(${MISCELLANY_IMAGES.ICON_TOOL_REACT})`,
  [ICONS_CSS_VAR.TOOL_GIT]: `url(${MISCELLANY_IMAGES.ICON_TOOL_GIT})`,
  [ICONS_CSS_VAR.TOOL_CSHARP]: `url(${MISCELLANY_IMAGES.ICON_TOOL_CSHARP})`,
  [ICONS_CSS_VAR.TOOL_FIGMA]: `url(${MISCELLANY_IMAGES.ICON_TOOL_FIGMA})`,
  [ICONS_CSS_VAR.TOOL_ATLASSIAN]: `url(${MISCELLANY_IMAGES.ICON_TOOL_ATLASSIAN})`,
  // SERVICES
  [ICONS_CSS_VAR.SERVICE_FRONTEND]: `url(${MISCELLANY_IMAGES.ICON_SERVICE_FRONTEND})`,
  [ICONS_CSS_VAR.SERVICE_BACKEND]: `url(${MISCELLANY_IMAGES.ICON_SERVICE_BACKEND})`,
  [ICONS_CSS_VAR.SERVICE_APPS]: `url(${MISCELLANY_IMAGES.ICON_SERVICE_APPS})`,
  [ICONS_CSS_VAR.SERVICE_BPM]: `url(${MISCELLANY_IMAGES.ICON_SERVICE_BPM})`,
  // LANGUAGES
  [ICONS_CSS_VAR.LANGUAGES_TYPESCRIPT]: `url(${MISCELLANY_IMAGES.ICON_LANGUAGES_TYPESCRIPT})`,
  [ICONS_CSS_VAR.LANGUAGES_HTML]: `url(${MISCELLANY_IMAGES.ICON_LANGUAGES_HTML})`,
  [ICONS_CSS_VAR.LANGUAGES_SCSS]: `url(${MISCELLANY_IMAGES.ICON_LANGUAGES_SCSS})`,
  // SOCIAL MEDIA
  [ICONS_CSS_VAR.SOCIAL_MEDIA_X]: `url(${MISCELLANY_IMAGES.ICON_SOCIAL_MEDIA_X})`,
  [ICONS_CSS_VAR.SOCIAL_MEDIA_FACEBOOK]: `url(${MISCELLANY_IMAGES.ICON_SOCIAL_MEDIA_FACEBOOK})`,
  [ICONS_CSS_VAR.SOCIAL_MEDIA_INSTAGRAM]: `url(${MISCELLANY_IMAGES.ICON_SOCIAL_MEDIA_INSTAGRAM})`,
  [ICONS_CSS_VAR.SOCIAL_MEDIA_LINKEDIN]: `url(${MISCELLANY_IMAGES.ICON_SOCIAL_MEDIA_LINKEDIN})`,
  [ICONS_CSS_VAR.SOCIAL_MEDIA_FIGMA]: `url(${MISCELLANY_IMAGES.ICON_SOCIAL_MEDIA_FIGMA})`,

  /***
    IMAGES
  **/
  // FIGURES
  [IMAGES_CSS_VAR.FIGURE_HERO]: `url(${MISCELLANY_IMAGES.IMAGE_FIGURE_HERO})`,
  [IMAGES_CSS_VAR.FIGURE_SKILLS]: `url(${MISCELLANY_IMAGES.IMAGE_FIGURE_SKILLS})`,
};
