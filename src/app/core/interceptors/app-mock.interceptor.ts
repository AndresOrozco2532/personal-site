import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerMock } from '@app/data/mocks/app-serve.mock';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppMockInterceptor implements HttpInterceptor {
  private _localServer: ServerMock;

  constructor() {
    this._localServer = new ServerMock();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this._checkIsTest(req)) {
      return this._sendLocalServer(req);
    }
    return next.handle(req);
  }
  /**
   * Check if environment not is production and token is for test or email and password is given for test
   * @param req - Info request sended
   */
  private _checkIsTest(req: HttpRequest<any>): boolean {
    return !environment.production && environment.isTestServer;
  }

  private _sendLocalServer(req: any): Observable<HttpEvent<any>> {
    return this._localServer
      .request(req)
      .pipe(map((response: any) => response));
  }
}
