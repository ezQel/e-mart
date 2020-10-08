import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropsRoutingModule } from './props-routing.module';
import { KesPipe } from './kes.pipe';



@NgModule({
  declarations: [
    KesPipe,
  ],
  imports: [
    CommonModule,
    PropsRoutingModule,
  ]
})
export class PropsModule { }
