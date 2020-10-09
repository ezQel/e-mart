import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrFormFieldComponent } from './cr-form-field.component';

describe('CrFormFieldComponent', () => {
  let component: CrFormFieldComponent;
  let fixture: ComponentFixture<CrFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
