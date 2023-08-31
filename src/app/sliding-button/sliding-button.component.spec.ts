import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingButtonComponent } from './sliding-button.component';

describe('SlidingButtonComponent', () => {
  let component: SlidingButtonComponent;
  let fixture: ComponentFixture<SlidingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingButtonComponent]
    });
    fixture = TestBed.createComponent(SlidingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
