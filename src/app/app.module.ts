import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ListCardComponent } from './list-card/list-card.component';
import { FlickingComponent } from './flicking/flicking.component';
import { NgxFlickingModule } from '@egjs/ngx-flicking';
import { ListComponent } from './list/list.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { GenericToggleComponent } from './generic-toggle/generic-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TabGroupComponent } from './tab-group/tab-group.component';
import {MatTabsModule} from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    FlickingComponent,
    ListComponent,
    BannerComponent,
    HeaderComponent,
    GenericToggleComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    NgxFlickingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
