import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {
  HTTP_CODES,
  HTTP_ERROR_CODES,
} from '@app/core/constants/http.constants';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ROUTES_MOCK } from '../constants/mocks.constants';

export class ServerMock {
  public request(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const response = ROUTES_MOCK.find((route) => {
      const url = route?.validateParam ? req.urlWithParams : req.url;
      const isSameRoute = new RegExp(`(^${route.url}$)`, 'g').test(url);
      const isSameMethod = !route?.method || route?.method === req.method;
      return isSameRoute && isSameMethod;
    });
    const status: number = response?.status ?? HTTP_CODES.OK;
    const isAnErrorCode: boolean =
      !!response?.status && !!HTTP_ERROR_CODES[response?.status];

    if (!response || isAnErrorCode) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: response?.status ?? HTTP_CODES.NOT_FOUND,
            statusText: `The route was not found ${req.url}`,
            url: req.url,
          })
      );
    }

    return new Observable((obs: any) => {
      setTimeout(() => {
        obs.next(new HttpResponse({ status, body: response.data }));
        obs.complete();
      }, environment.testServeWait);
    });
  }
}
