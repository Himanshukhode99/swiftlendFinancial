import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationshiExccutiveRoutingModule } from './relationshi-exccutive-routing.module';
import { AddEnqueryComponent } from './add-enquery/add-enquery.component';
import { ViewEnqueryComponent } from './view-enquery/view-enquery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ViewAcceptLoanComponent } from './view-accept-loan/view-accept-loan.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanApplicationComponent } from './loan-application/loan-application.component';


@NgModule({
  declarations: [
    AddEnqueryComponent,
    ViewEnqueryComponent,
    FeedbackComponent,
    ViewAcceptLoanComponent,
    LoanApplicationComponent
  ],
  imports: [
    CommonModule,
    RelationshiExccutiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class RelationshiExccutiveModule { }
