import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldNewsComponent } from './gold-news/gold-news.component';
import { SilverNewsComponent } from './silver-news/silver-news.component';



@NgModule({
  declarations: [
    GoldNewsComponent,
    SilverNewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GoldenModule { }
