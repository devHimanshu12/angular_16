import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverNewsComponent } from './silver-news.component';

describe('SilverNewsComponent', () => {
  let component: SilverNewsComponent;
  let fixture: ComponentFixture<SilverNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilverNewsComponent]
    });
    fixture = TestBed.createComponent(SilverNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
