import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { HomeHeaderComponent } from './templates/home-header/home-header.component';
import { HomeFooterComponent } from './templates/home-footer/home-footer.component';
import { MenuComponent } from './templates/menu/menu.component';
import { AppHeaderComponent } from './templates/app-header/app-header.component';
import { LoginComponent } from './entry/login/login.component';
import { AboutUsComponent } from './entry/about-us/about-us.component';
import { EmiCalculatorComponent } from './entry/emi-calculator/emi-calculator.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { GetCreditScoreComponent } from './entry/get-credit-score/get-credit-score.component';
import { EligibilityComponent } from './entry/eligibility/eligibility.component';
import { ApplyNowComponent } from './entry/apply-now/apply-now.component';
import{ ReactiveFormsModule } from '@angular/forms';
import { ApplicationDashboardComponent } from './entry/application-dashboard/application-dashboard.component';
import { DocumentVerificationComponent } from './module/operational-exexutive/document-verification/document-verification.component';
import { CibilCheckComponent } from './module/operational-exexutive/cibil-check/cibil-check.component';
import { RequestedEnquriesComponent } from './module/operational-exexutive/requested-enquries/requested-enquries.component';
import { UserOptionPipe } from './pipe/user-option.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    MenuComponent,
    AppHeaderComponent,
    LoginComponent,
    AboutUsComponent,
    EmiCalculatorComponent,
    EnquiryComponent,
    GetCreditScoreComponent,
    EligibilityComponent,
    ApplyNowComponent,
    ApplicationDashboardComponent,
    DocumentVerificationComponent,
    CibilCheckComponent,
    RequestedEnquriesComponent,
    UserOptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
