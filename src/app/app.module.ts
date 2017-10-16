import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { JunkComponent } from './junk/junk.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Login2Component } from './login2/login2.component';
import { TechtalkDashboardComponent } from './techtalk-dashboard/techtalk-dashboard.component';
import { Junk2Component } from './junk2/junk2.component';
import { OrgdetailsComponent } from './orgdetails/orgdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    JunkComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    Login2Component,
    TechtalkDashboardComponent,
    Junk2Component,
    OrgdetailsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true,
  },
  AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
