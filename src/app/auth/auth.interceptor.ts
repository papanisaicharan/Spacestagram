import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercept');
    req = req.clone({
      setParams: {
        api_key: 'NZ83P6bhSHCTKthoGMlMmUyzlDSCtxf1xX2YpBLd',
      },
    });
    return next.handle(req);
  }
}
