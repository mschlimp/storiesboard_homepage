import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { ImprintComponent } from './imprint/imprint.component'
import { PrivacyComponent } from './privacy/privacy.component'
import { DaoOverviewComponent } from './dao-overview/dao-overview.component';
import { LeanOverviewComponent } from './lean-overview/lean-overview.component';
import { DetailLeanblogEntry002Component } from './lean/detail/detail-leanblog-entry002/detail-leanblog-entry002.component';
import { DetailBlogEntry001Component } from './lean/detail/detail-blog-entry001/detail-blog-entry001.component';
 
const routes: Routes = [
  { path: 'imprint', component: ImprintComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'blog/dao', component: DaoOverviewComponent},
  { path: 'blog/lean', component: LeanOverviewComponent},
  { path: 'blog/lean/20211201/lean-blog', component: DetailBlogEntry001Component},
  { path: 'blog/lean/20211211/your-podcast', component: DetailLeanblogEntry002Component},
  { path: '', component: LandingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
