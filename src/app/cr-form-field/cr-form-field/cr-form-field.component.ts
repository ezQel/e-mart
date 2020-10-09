import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { CrInputDirective } from '../cr-input.directive';

@Component({
  selector: 'app-cr-form-field',
  templateUrl: './cr-form-field.component.html',
  styleUrls: ['./cr-form-field.component.css']
})
export class CrFormFieldComponent implements OnInit {
  @Input() appearance;

  @ContentChild(CrInputDirective)
  crtInput;

  hasError(): boolean {
    return this.crtInput ? (this.crtInput.control.invalid && this.crtInput.control.touched)
    || (this.crtInput.control.formDirective.submitted && this.crtInput.control.invalid) : false;
  }

  getErrorMsg(): string {
    const err = this.crtInput.control.errors;

    if (this.hasError()) {
      if (err.required) {
        return 'required';
      }
      else if (err.minlength) {
        return 'too short';
      }
      else if (err.email) {
        return 'invalid email';
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
