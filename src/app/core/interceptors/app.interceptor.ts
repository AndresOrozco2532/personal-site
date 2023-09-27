import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, mergeMap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { AppFacade } from '@app/facade/app/app.facade';
import { APP_CONSTANTS } from '../constants/app.constants';
import { COUNTRY_CONSTANTS } from '../constants/country.constants';
import { CONTENT_TYPE, HTTP_HEADERS } from '../constants/http.constants';
import { DEFAULT_LANGUAGE } from '../i18n/constants/translate.constants';

const API_URL = environment.api_url;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private _appFacade: AppFacade) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this._sendRequest(req, next);
  }

  private _sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers: any = this._mapHeaders(req.headers);
    let params: HttpParams = new HttpParams();

    req.params.keys().forEach((key) => {
      const param = req.params.get(key);
      if (param && param !== 'null' && param !== 'undefined')
        params = params.append(key, param);
    });

    return this._appFacade.language$.pipe(
      mergeMap((language) => {
        headers[HTTP_HEADERS.ACCEPT_LANGUAGE] = language ?? DEFAULT_LANGUAGE;

        const url: string = `${API_URL}/${APP_CONSTANTS.API_NAME}${req.url}`;
        const reqUpdated = req.clone({
          url,
          setHeaders: headers,
          params,
        });

        return this._continueRequest(reqUpdated, next);
      })
    );
  }

  private _continueRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }

  private _mapHeaders(reqHeaders) {
    let headers: any = {
      [HTTP_HEADERS.CONTENT_TYPE]: CONTENT_TYPE.JSON,
      [HTTP_HEADERS.ACCEPT_LANGUAGE]: COUNTRY_CONSTANTS.US.language,
      [HTTP_HEADERS.API_KEY]: process.env.API_KEY,
    };
    reqHeaders.keys().forEach((key) => {
      const headerValue = reqHeaders.get(key);
      if (headerValue && headerValue !== 'null' && headerValue !== 'undefined')
        headers[key] = headerValue;
    });
    return headers;
  }
}
