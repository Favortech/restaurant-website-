import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path:'', component: HomepageComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'login', component: LoginComponent}
];
