import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { JunkComponent } from './junk/junk.component';
import { Junk2Component } from './junk2/junk2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrgdetailsComponent } from './orgdetails/orgdetails.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login2Component },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo : 'orgdetails',
                pathMatch: 'prefix'
            },
            {
                path: 'orgdetails',
                component: OrgdetailsComponent
            }
        ]
    },
    { path: 'junk2', component: Junk2Component },
    { path: 'junk', component: JunkComponent, canActivate: [AuthGuardService] },
    { path: '**', component: PageNotFoundComponent }
];
