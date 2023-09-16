import { SideBarStyle } from '@app/core/models/side-bar.model';
import { Slider } from '@app/core/models/slider.model';
import {
  ICON_TOOL_ANGULAR,
  ICON_TOOL_ATLASSIAN,
  ICON_TOOL_CSHARP,
  ICON_TOOL_FIGMA,
  ICON_TOOL_GIT,
  ICON_TOOL_NGRX,
  ICON_TOOL_REACT,
} from '@app/presentation/assets/themes/miscellany/images';

export const SIDE_BAR_STYLES: { [key: string]: SideBarStyle } = {
  HERO: {
    background: `linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)`,
  },
  SKILLS: {
    background: `linear-gradient(#56D364, #2EA043 10%, #196C2E 70%, #EC6547 80%, #FFD6CC)`,
  },
};

// HERO
export const TOOLS_SRC: string[] = [
  ICON_TOOL_ANGULAR,
  ICON_TOOL_NGRX,
  ICON_TOOL_REACT,
  ICON_TOOL_GIT,
  ICON_TOOL_CSHARP,
  ICON_TOOL_FIGMA,
  ICON_TOOL_ATLASSIAN,
];

// SKILLS
export const SKILLS_LIST: Slider[] = [
  {
    title: 'PUBLIC.LANDING.SKILLS.FRONT',
    percentage: 95,
  },
  {
    title: 'PUBLIC.LANDING.SKILLS.BACK',
    percentage: 90,
  },
  {
    title: 'PUBLIC.LANDING.SKILLS.APIS',
    percentage: 93,
  },
  {
    title: 'PUBLIC.LANDING.SKILLS.GIT',
    percentage: 94,
  },
];
