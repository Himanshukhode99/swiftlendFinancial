import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { GetCreditScoreComponent } from './entry/get-credit-score/get-credit-score.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { AboutUsComponent } from './entry/about-us/about-us.component';

const routes: Routes = [
  {
    path:"", component:HomeDashboardComponent
  },
  {
    path:"creditscore" , component:GetCreditScoreComponent
  },
  {

    path:"enquiry" , component:EnquiryComponent
  },
  {
    path:'aboutus',component:AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
