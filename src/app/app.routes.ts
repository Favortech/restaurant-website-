import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerificationComponent } from './verification/verification.component';

export const routes: Routes = [
    {path:'', component: IntroComponent},
    {path:'intro', component: IntroComponent},
    {path:'login', component: LoginComponent},
    {path:"home", component:HomepageComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'', redirectTo:'https://www.facebook.com/', pathMatch:'full'},
    {path:'', redirectTo:'https://www.google.com.ng/', pathMatch:'full'},
    {path:'register', component:RegisterComponent},
    {path:'menu', component:MenuComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},
    {path:'reset',component:ResetpasswordComponent},
    {path:'verify',component:VerificationComponent}
];
