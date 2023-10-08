import { HttpClient } from '@angular/common/http';
import { SelectOption } from '@app/presentation/layout/forms/interfaces/form.interface';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import ENGLISH from '../en';
import SPANISH from '../es';

export const LANGUAGE_PATH = './app/core/i18n/';

export const LANGUAGE_SEPARATOR = '/';
export const LANGUAGE_SUFFIX = '.ts';

export enum LANGUAGES {
  ES = 'es',
  EN = 'en',
}

export const DEFAULT_LANGUAGE = LANGUAGES.EN;
export const LANGUAGES_LIST = [LANGUAGES.EN, LANGUAGES.ES];
export const LANGUAGES_OPTIONS: SelectOption<string>[] = [
  {
    key: 'APP.LANGUAGES.ENGLISH',
    value: LANGUAGES.EN,
  },
  {
    key: 'APP.LANGUAGES.SPANISH',
    value: LANGUAGES.ES,
  },
];

export const TRANSLATION_BY_LANGUAGE = {
  [LANGUAGES.ES]: SPANISH,
  [LANGUAGES.EN]: ENGLISH,
};

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, LANGUAGE_PATH, LANGUAGE_SUFFIX);
}
