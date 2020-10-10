import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { PropsModule } from '../props/props.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    PropsModule,
  ]
})
export class CartModule { }
