import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component: IntroComponent},
    {path:'intro', component: IntroComponent},
    {path:'login', component: LoginComponent},
    {path:"home", component:HomepageComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'register', component:RegisterComponent},
];
