import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfoundcomponentComponent } from './component/pagenotfoundcomponent/pagenotfoundcomponent.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ResetpassowrdComponent } from './component/resetpassowrd/resetpassowrd.component';
import { AuthGuard } from './gaurd/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpassowrdComponent },
  { path: '**', component: PagenotfoundcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
