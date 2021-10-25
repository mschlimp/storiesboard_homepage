import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CookieLawModule } from 'angular2-cookie-law';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ImprintComponent,
    PrivacyComponent
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
    FlexLayoutModule,
    MatGridListModule,
    CookieLawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
