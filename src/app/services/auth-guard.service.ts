import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router, RouterState } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private http: HttpClient, private router: Router) { }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean  {
  //   return this.http.get('http://localhost:3000/isactive').map(data => {
  //     if (data['success'] === true && data['userid']) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    return this.http.get('http://localhost:3000/isactive').map(data => {
      if (data['success'] === true && data['userid']) {
        return true;
      }
      return false;
    });
  }

}
