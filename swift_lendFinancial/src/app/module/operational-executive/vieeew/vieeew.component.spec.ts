import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieeewComponent } from './vieeew.component';

describe('VieeewComponent', () => {
  let component: VieeewComponent;
  let fixture: ComponentFixture<VieeewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VieeewComponent]
    });
    fixture = TestBed.createComponent(VieeewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
