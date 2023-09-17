import { SideBarStyle } from '@app/core/models/side-bar.model';
import { Slider } from '@app/core/models/slider.model';
import {
  ICONS_CSS_VAR,
  ICON_TOOL_ANGULAR,
  ICON_TOOL_ATLASSIAN,
  ICON_TOOL_CSHARP,
  ICON_TOOL_FIGMA,
  ICON_TOOL_GIT,
  ICON_TOOL_NGRX,
  ICON_TOOL_REACT,
} from '@app/presentation/assets/themes/miscellany/images';
import { TabEditorModel } from '@app/presentation/layout/components/monaco-editor/types';

export const SIDE_BAR_STYLES: { [key: string]: SideBarStyle } = {
  HERO: {
    background: `linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)`,
  },
  SKILLS: {
    background: `linear-gradient(#56D364, #2EA043 10%, #196C2E 70%, #EC6547 80%, #FFD6CC)`,
  },
  SERVICES: {
    background: `linear-gradient(#FFD6CC, #EC6547 10%, #35395F 70%, #797EF9 80%, #ABB4FF)`,
  },
  WORK_TOGETHER: {
    background: `linear-gradient(#35395F, #797EF9 10%, #939BFC 70%, #ABB4FF 80%)`,
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

// SERVICES

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceCard[] = [
  {
    icon: ICONS_CSS_VAR.SERVICE_FRONTEND,
    title: 'PUBLIC.LANDING.SERVICES.FRONT.TITLE',
    description: 'PUBLIC.LANDING.SERVICES.FRONT.DESCRIPTION',
  },
  {
    icon: ICONS_CSS_VAR.SERVICE_BACKEND,
    title: 'PUBLIC.LANDING.SERVICES.BACK.TITLE',
    description: 'PUBLIC.LANDING.SERVICES.BACK.DESCRIPTION',
  },
  {
    icon: ICONS_CSS_VAR.SERVICE_APPS,
    title: 'PUBLIC.LANDING.SERVICES.APPS.TITLE',
    description: 'PUBLIC.LANDING.SERVICES.APPS.DESCRIPTION',
  },
  {
    icon: ICONS_CSS_VAR.SERVICE_BPM,
    title: 'PUBLIC.LANDING.SERVICES.BPM.TITLE',
    description: 'PUBLIC.LANDING.SERVICES.BPM.DESCRIPTION',
  },
];

// Let's work together

export enum CONSOLE_LANGUAGES {
  TYPESCRIPT = 'typescript',
  HTML = 'html',
  SCSS = 'css',
}

export const CONSOLE_CODE_LANGUAGES: TabEditorModel[] = [
  {
    icon: ICONS_CSS_VAR.LANGUAGES_TYPESCRIPT,
    title: 'PUBLIC.LANDING.LETS_WORK_TOGETHER.CONSOLE.TABS.TYPESCRIPT',
    code: 'PUBLIC.LANDING.LETS_WORK_TOGETHER.CONSOLE.CODE.TYPESCRIPT',
    language: CONSOLE_LANGUAGES.TYPESCRIPT,
    editorOptions: { language: CONSOLE_LANGUAGES.TYPESCRIPT },
  },
  {
    icon: ICONS_CSS_VAR.LANGUAGES_HTML,
    title: 'PUBLIC.LANDING.LETS_WORK_TOGETHER.CONSOLE.TABS.HTML',
    code: 'PUBLIC.LANDING.LETS_WORK_TOGETHER.CONSOLE.CODE.HTML',
    language: CONSOLE_LANGUAGES.HTML,
    editorOptions: { language: CONSOLE_LANGUAGES.HTML },
  },
  {
    icon: ICONS_CSS_VAR.LANGUAGES_SCSS,
    title: 'PUBLIC.LANDING.LETS_WORK_TOGETHER.CONSOLE.TABS.SCSS',
    code: 'PUBLIC.LANDING.LETS_WORK_TOGETHER.CONSOLE.CODE.SCSS',
    language: CONSOLE_LANGUAGES.SCSS,
    editorOptions: { language: CONSOLE_LANGUAGES.SCSS },
  },
];
