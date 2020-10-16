import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { PropsModule } from '../props/props.module';
import { ProductDetailsComponent } from './product-details.component';
import { CustomizeOrderComponent } from './customize-order/customize-order.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    CustomizeOrderComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    PropsModule,
  ]
})
export class ProductDetailsModule { }
