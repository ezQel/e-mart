import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PropsModule } from '../props/props.module';
import { CheckoutComponent } from './checkout.component';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    PropsModule,
  ]
})
export class CheckoutModule { }
