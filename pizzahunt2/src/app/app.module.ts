import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangePasswordComponent } from './user/change-password/change-password.component';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
