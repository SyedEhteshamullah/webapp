import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaderResponse, HttpSentEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('Authorization') !== undefined && sessionStorage.getItem('Authorization') !== null) {
      const authReq = req.clone({ headers: req.headers.set('Authorization', sessionStorage.getItem('Authorization')) });
      return next.handle(authReq).do(event => {
            if (event instanceof HttpResponse) {
              if (event.body.success === false) {
                sessionStorage.clear();
                this.router.navigate(['/']);
              }
            }
      }).catch((err) => {
        this.router.navigate(['/']);
        return Observable.of(err);
      });
    }
    return next.handle(req);
  }
}
