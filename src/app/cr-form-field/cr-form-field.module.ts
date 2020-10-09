import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrFormFieldComponent } from './cr-form-field/cr-form-field.component';
import { CrInputDirective } from './cr-input.directive';



@NgModule({
  declarations: [CrFormFieldComponent, CrInputDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CrFormFieldComponent, CrInputDirective
  ]
})
export class CrFormFieldModule { }
