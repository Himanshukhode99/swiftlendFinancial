import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestedEnquiriesComponent } from './requested-enquiries/requested-enquiries.component';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { CibilCheckComponent } from './cibil-check/cibil-check.component';

const routes: Routes = [
  {path:'requestinq',component:RequestedEnquiriesComponent},
  {path:'documentverfy',component:DocumentVerificationComponent},
  {path:'cibilecheck',component:CibilCheckComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationalExecutiveRoutingModule { }
