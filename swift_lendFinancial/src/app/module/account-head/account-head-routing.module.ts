import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveLoanComponent } from './approve-loan/approve-loan.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { CreditAmountComponent } from './credit-amount/credit-amount.component';
import { DefaulterComponent } from './defaulter/defaulter.component';

const routes: Routes = [
  {path:'approve-loan',component:ApproveLoanComponent},
  {
    path:'ledger',component:LedgerComponent
  },
  {path:'view_ledger',component:ViewLedgerComponent},
  {path:'cedit_amt',component:CreditAmountComponent},
  {path:'default',component:DefaulterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHeadRoutingModule { }
