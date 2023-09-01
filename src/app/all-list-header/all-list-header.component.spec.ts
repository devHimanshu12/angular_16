import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListHeaderComponent } from './all-list-header.component';

describe('AllListHeaderComponent', () => {
  let component: AllListHeaderComponent;
  let fixture: ComponentFixture<AllListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllListHeaderComponent]
    });
    fixture = TestBed.createComponent(AllListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
