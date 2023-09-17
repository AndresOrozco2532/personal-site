import { CONSOLE_LANGUAGES } from '@app/presentation/features/public/pages/landing/constants/landing.constants';

export interface DiffEditorModel {
  code: string;
  language: string;
}

export interface EditorModel {
  value: string;
  language?: string;
  uri?: any;
}

export interface TabEditorModel {
  icon?: string;
  title?: string;
  code?: string;
  language?: CONSOLE_LANGUAGES;
  editorOptions?: any;
}
