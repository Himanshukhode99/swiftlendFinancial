import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTempleteComponent } from './main-templete.component';

describe('MainTempleteComponent', () => {
  let component: MainTempleteComponent;
  let fixture: ComponentFixture<MainTempleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTempleteComponent]
    });
    fixture = TestBed.createComponent(MainTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
