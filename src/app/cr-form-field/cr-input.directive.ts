import { Directive } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCrInput]'
})
export class CrInputDirective {

  constructor(public control: NgControl) { }

}
