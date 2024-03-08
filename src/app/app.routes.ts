import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'register', component: AppComponent},
    {path:'dashboard', component: DashboardComponent}
];
