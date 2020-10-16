import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PropsModule } from '../props/props.module';
import { CrFormFieldModule } from '../cr-form-field/cr-form-field.module';
import { OrdersComponent } from './orders.component';
import { ReviewComponent } from './review/review.component';
import { ConfirmCancelComponent } from './confirm-cancel/confirm-cancel.component';


@NgModule({
  declarations: [
    OrdersComponent,
    ReviewComponent,
    ConfirmCancelComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    PropsModule,
    CrFormFieldModule,
  ]
})
export class OrdersModule { }
