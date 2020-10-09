import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { PropsModule } from '../props/props.module';
import { EditEmailComponent } from './edit-email/edit-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditNameComponent } from './edit-name/edit-name.component';


@NgModule({
  declarations: [
    AccountComponent,
    EditEmailComponent,
    ChangePasswordComponent,
    EditNameComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    PropsModule,
  ]
})
export class AccountModule { }
