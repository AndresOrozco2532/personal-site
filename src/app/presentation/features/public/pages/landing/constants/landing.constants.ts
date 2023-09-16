import { SideBarStyle } from '@app/core/models/side-bar.model';
import {
  IMAGE_TOOL_ANGULAR,
  IMAGE_TOOL_ATLASSIAN,
  IMAGE_TOOL_CSHARP,
  IMAGE_TOOL_FIGMA,
  IMAGE_TOOL_GIT,
  IMAGE_TOOL_NGRX,
  IMAGE_TOOL_REACT,
} from '@app/presentation/assets/themes/miscellany/images';

export const TOOLS_SRC: string[] = [
  IMAGE_TOOL_ANGULAR,
  IMAGE_TOOL_NGRX,
  IMAGE_TOOL_REACT,
  IMAGE_TOOL_GIT,
  IMAGE_TOOL_CSHARP,
  IMAGE_TOOL_FIGMA,
  IMAGE_TOOL_ATLASSIAN,
];

export const SIDE_BAR_STYLES: { [key: string]: SideBarStyle } = {
  HERO: {
    background: `linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)`,
  },
};
