import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickingComponent } from './flicking.component';

describe('FlickingComponent', () => {
  let component: FlickingComponent;
  let fixture: ComponentFixture<FlickingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlickingComponent]
    });
    fixture = TestBed.createComponent(FlickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
