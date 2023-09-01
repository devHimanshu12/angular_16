import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsHeaderComponent } from './lists-header.component';

describe('ListsHeaderComponent', () => {
  let component: ListsHeaderComponent;
  let fixture: ComponentFixture<ListsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsHeaderComponent]
    });
    fixture = TestBed.createComponent(ListsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
