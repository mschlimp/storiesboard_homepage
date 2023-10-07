import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { ImprintComponent } from './imprint/imprint.component'
import { PrivacyComponent } from './privacy/privacy.component'
import { Minus60OverviewComponent } from './minus60-overview/minus60-overview.component';
import { LeanOverviewComponent } from './lean-overview/lean-overview.component';
import { DetailLeanblogEntry002Component } from './lean/detail/detail-leanblog-entry002/detail-leanblog-entry002.component';
import { DetailBlogEntry001Component } from './lean/detail/detail-blog-entry001/detail-blog-entry001.component';
import { Detail001Component } from './blog-entry/detail001/detail001.component';
import { Detail002Component } from './blog-entry/detail002/detail002.component';
import { Detail003Component } from './blog-entry/detail003/detail003.component';
 
const routes: Routes = [
  { path: 'imprint', component: ImprintComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'blog/minus60', component: Minus60OverviewComponent},
  { path: 'minus60/20230930/start_or_week_one', component: Detail001Component},
  { path: 'minus60/20231002/relaxed_week_two', component: Detail002Component},
  { path: 'minus60/20231009/zehlendorfer_crosslauf', component: Detail003Component},
  { path: '', component: LandingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
