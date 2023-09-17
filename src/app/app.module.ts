import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DaoOverviewComponent } from './dao-overview/dao-overview.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { LeanOverviewComponent } from './lean-overview/lean-overview.component';
import { ShortBlogEntry001Component } from './lean/short/short-blog-entry001/short-blog-entry001.component';
import { DetailBlogEntry001Component } from './lean/detail/detail-blog-entry001/detail-blog-entry001.component';
import { ShortLeanblogEntry002Component } from './lean/short/short-leanblog-entry002/short-leanblog-entry002.component';
import { DetailLeanblogEntry002Component } from './lean/detail/detail-leanblog-entry002/detail-leanblog-entry002.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ImprintComponent,
    PrivacyComponent,
    DaoOverviewComponent,
    BlogEntryComponent,
    LeanOverviewComponent,
    ShortBlogEntry001Component,
    DetailBlogEntry001Component,
    ShortLeanblogEntry002Component,
    DetailLeanblogEntry002Component
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
