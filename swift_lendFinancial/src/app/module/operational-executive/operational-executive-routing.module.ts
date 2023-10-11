import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestedEnquiriesComponent } from './requested-enquiries/requested-enquiries.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {path:'requestinq',component:RequestedEnquiriesComponent},
  {path:'verify_doc',component:DocumentVerificationComponent},
  {path:'check_cibil',component:CibilCheckComponent},
  {path:'check_cibil/:id',component:CibilCheckComponent},
  {
    path:'verification',component:VerificationComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalExecutiveRoutingModule { }
