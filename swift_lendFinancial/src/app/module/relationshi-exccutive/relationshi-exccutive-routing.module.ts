import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnqueryComponent } from './add-enquery/add-enquery.component';
import { ViewEnqueryComponent } from './view-enquery/view-enquery.component';
import { ViewAcceptLoanComponent } from './view-accept-loan/view-accept-loan.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path:'addenq',component:AddEnqueryComponent},
  {path:'viewenq',component:ViewEnqueryComponent},
  {path:'viewloan',component:ViewAcceptLoanComponent},
  {path:'feedback',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelationshiExccutiveRoutingModule { }
