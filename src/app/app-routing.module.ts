import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { ImprintComponent } from './imprint/imprint.component'
import { PrivacyComponent } from './privacy/privacy.component'
import { DaoOverviewComponent } from './dao-overview/dao-overview.component';
 
const routes: Routes = [
  { path: 'imprint', component: ImprintComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'blog/dao', component: DaoOverviewComponent},
  { path: '', component: LandingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
