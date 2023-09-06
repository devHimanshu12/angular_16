import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderLoaderComponent } from './list-header-loader.component';

describe('ListHeaderLoaderComponent', () => {
  let component: ListHeaderLoaderComponent;
  let fixture: ComponentFixture<ListHeaderLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHeaderLoaderComponent]
    });
    fixture = TestBed.createComponent(ListHeaderLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
