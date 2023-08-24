import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericToggleComponent } from './generic-toggle.component';

describe('GenericToggleComponent', () => {
  let component: GenericToggleComponent;
  let fixture: ComponentFixture<GenericToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericToggleComponent]
    });
    fixture = TestBed.createComponent(GenericToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
