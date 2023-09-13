import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { LANGUAGES } from '@app/core/i18n/constants/translate.constants';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private _translate: TranslateService) {}

  public setLanguage(language: LANGUAGES) {
    import(
      /* webpackInclude: /(es|en)\.mjs$/ */
      `/node_modules/@angular/common/locales/${language}.mjs`
    ).then((module) => registerLocaleData(module.default));

    this._translate.use(language);
  }
}
