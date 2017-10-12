import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    if (sessionStorage.getItem('Authorization') !== undefined) {
      req.headers.append('Authorization', sessionStorage.getItem('Authorization'));
    }
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        if (event.body.errorcode === 401) {
          sessionStorage.clear();
          console.log('Unauthorized access');
          console.log(event);
        }
      }
    });
  }
}
