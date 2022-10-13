import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupPaymentComponent } from './form-group-payment.component';

describe('FormGroupPaymentComponent', () => {
  let component: FormGroupPaymentComponent;
  let fixture: ComponentFixture<FormGroupPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
