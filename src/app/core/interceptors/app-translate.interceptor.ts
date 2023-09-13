import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HTTP_CODES } from '../constants/http.constants';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_PATH,
  LANGUAGE_SEPARATOR,
  LANGUAGE_SUFFIX,
  TRANSLATION_BY_LANGUAGE,
} from '../i18n/constants/translate.constants';

@Injectable()
export class AppTranslateInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const reqLanguage = req.url.indexOf(LANGUAGE_PATH) > -1;
    if (reqLanguage) {
      const languageFolder = req.url.split(LANGUAGE_PATH).pop();
      const language: string = languageFolder
        .split(LANGUAGE_SEPARATOR)
        .pop()
        .split(LANGUAGE_SUFFIX)
        .shift();

      return of(
        new HttpResponse({
          status: HTTP_CODES.OK,
          body: this._getBody(language),
        })
      );
    }

    return next.handle(req);
  }

  private _getBody(language: string): Object {
    return !language
      ? TRANSLATION_BY_LANGUAGE[DEFAULT_LANGUAGE]
      : TRANSLATION_BY_LANGUAGE[language];
  }
}
