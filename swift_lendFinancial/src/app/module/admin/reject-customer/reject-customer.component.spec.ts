import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectCustomerComponent } from './reject-customer.component';

describe('RejectCustomerComponent', () => {
  let component: RejectCustomerComponent;
  let fixture: ComponentFixture<RejectCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectCustomerComponent]
    });
    fixture = TestBed.createComponent(RejectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
