import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"reset",component:ResetComponent},
  {path:"resetPassword",component: ResetPasswordComponent},
  {path:"changePassword",component:ChangePasswordComponent },
  { path: '**', component: ErrComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ErrComponent]
