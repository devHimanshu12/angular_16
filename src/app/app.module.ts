import {  NgModule } from '@angular/core';
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
import { ListActionBarComponent } from './list-action-bar/list-action-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SlidingButtonComponent } from './sliding-button/sliding-button.component';
import { ListsHeaderComponent } from './lists-header/lists-header.component';
import { AllListHeaderComponent } from './all-list-header/all-list-header.component';
import { GenericDropdownComponent } from './generic-dropdown/generic-dropdown.component'

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    FlickingComponent,
    ListComponent,
    BannerComponent,
    HeaderComponent,
    GenericToggleComponent,
    TabGroupComponent,
    ListActionBarComponent,
    SlidingButtonComponent,
    ListsHeaderComponent,
    AllListHeaderComponent,
    GenericDropdownComponent,
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
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
