import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldNewsComponent } from './gold-news.component';

describe('GoldNewsComponent', () => {
  let component: GoldNewsComponent;
  let fixture: ComponentFixture<GoldNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoldNewsComponent]
    });
    fixture = TestBed.createComponent(GoldNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
