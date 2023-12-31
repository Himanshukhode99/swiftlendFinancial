import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { GetCreditScoreComponent } from './entry/get-credit-score/get-credit-score.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { AboutUsComponent } from './entry/about-us/about-us.component';
import { EmiCalculatorComponent } from './entry/emi-calculator/emi-calculator.component';
import { ApplicationDashboardComponent } from './entry/application-dashboard/application-dashboard.component';
import { LoginComponent } from './entry/login/login.component';
import { EligibilityComponent } from './entry/eligibility/eligibility.component';
import { MainTempleteComponent } from './templates/main-templete/main-templete.component';
import { ApplyNowComponent } from './entry/apply-now/apply-now.component';

const routes: Routes = [

  {path:"" , component:MainTempleteComponent,children:[

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
    {path:"login", component:LoginComponent} , 
    {path:"eligibility", component : EligibilityComponent},
    {path:"apply", component: ApplyNowComponent}

  ]
},
  {
    path:'application',component:ApplicationDashboardComponent,
    children:[
               {path:'admin' , loadChildren:()=>import('src/app/module/admin/admin.module').then(m=>m.AdminModule)},
               {path:'re' , loadChildren:()=>import('src/app/module/relationshi-exccutive/relationshi-exccutive.module').then(m=>m.RelationshiExccutiveModule)},
               {path:'oe',loadChildren:()=>import('src/app/module/operational-executive/operational-executive.module').then(m=>m.OperationalExecutiveModule)},
              {path:'cm',loadChildren:()=>import('src/app/module/credit-manager/credit-manager-routing.module').then(m=>m.CreditManagerRoutingModule)},
              {path:'ah',loadChildren:()=>import('src/app/module/account-head/account-head.module').then(m=>m.AccountHeadModule)}
             ]
              
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
