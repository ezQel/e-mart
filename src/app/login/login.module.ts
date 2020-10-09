import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CrFormFieldModule } from '../cr-form-field/cr-form-field.module';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PropsModule } from '../props/props.module';


@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CrFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    PropsModule,
  ]
})
export class LoginModule { }
