import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { GetCreditScoreComponent } from './entry/get-credit-score/get-credit-score.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { AboutUsComponent } from './entry/about-us/about-us.component';
import { EmiCalculatorComponent } from './entry/emi-calculator/emi-calculator.component';
import { ApplicationDashboardComponent } from './entry/application-dashboard/application-dashboard.component';

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
  },
  {
    path:"calculator" ,component:EmiCalculatorComponent
  },
  {
    path:'application',component:ApplicationDashboardComponent,
    children:[
               {path:'admin' , loadChildren:()=>import('src/app/module/admin/admin.module').then(m=>m.AdminModule)},
               {path:'re' , loadChildren:()=>import('src/app/module/relationshi-exccutive/relationshi-exccutive.module').then(m=>m.RelationshiExccutiveModule)},
              
             ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
