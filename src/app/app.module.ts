import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { Minus60OverviewComponent } from './minus60-overview/minus60-overview.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { LeanOverviewComponent } from './lean-overview/lean-overview.component';
import { ShortBlogEntry001Component } from './lean/short/short-blog-entry001/short-blog-entry001.component';
import { DetailBlogEntry001Component } from './lean/detail/detail-blog-entry001/detail-blog-entry001.component';
import { ShortLeanblogEntry002Component } from './lean/short/short-leanblog-entry002/short-leanblog-entry002.component';
import { DetailLeanblogEntry002Component } from './lean/detail/detail-leanblog-entry002/detail-leanblog-entry002.component';
import { Detail001Component } from './blog-entry/detail001/detail001.component';
import { Detail002Component } from './blog-entry/detail002/detail002.component';
import { Detail003Component } from './blog-entry/detail003/detail003.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ImprintComponent,
    PrivacyComponent,
    Minus60OverviewComponent,
    BlogEntryComponent,
    LeanOverviewComponent,
    ShortBlogEntry001Component,
    DetailBlogEntry001Component,
    ShortLeanblogEntry002Component,
    DetailLeanblogEntry002Component,
    Detail001Component,
    Detail002Component,
    Detail003Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
