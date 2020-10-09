import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { EditEmailComponent } from './edit-email/edit-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditNameComponent } from './edit-name/edit-name.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'editemail', component: EditEmailComponent },
  { path: 'editname', component: EditNameComponent },
  { path: 'changepwd', component: ChangePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
