import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLoaderComponent } from './banner-loader.component';

describe('BannerLoaderComponent', () => {
  let component: BannerLoaderComponent;
  let fixture: ComponentFixture<BannerLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerLoaderComponent]
    });
    fixture = TestBed.createComponent(BannerLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
