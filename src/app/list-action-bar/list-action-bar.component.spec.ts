import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionBarComponent } from './list-action-bar.component';

describe('ListActionBarComponent', () => {
  let component: ListActionBarComponent;
  let fixture: ComponentFixture<ListActionBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListActionBarComponent]
    });
    fixture = TestBed.createComponent(ListActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
