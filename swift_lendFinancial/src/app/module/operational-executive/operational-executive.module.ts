import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationalExecutiveRoutingModule } from './operational-executive-routing.module';
import { RequestedEnquiriesComponent } from './requested-enquiries/requested-enquiries.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import{ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    RequestedEnquiriesComponent,
    DocumentVerificationComponent,
    CibilCheckComponent
  ],
  imports: [
    CommonModule,
    OperationalExecutiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class OperationalExecutiveModule { }
