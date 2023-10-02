import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveLoanComponent } from './approve-loan/approve-loan.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { CreditAmountComponent } from './credit-amount/credit-amount.component';
import { DefaulterComponent } from './defaulter/defaulter.component';

const routes: Routes = [
  {path:'approveloan',component:ApproveLoanComponent},
  {
    path:'ledger',component:LedgerComponent
  },
  {path:'viewledger',component:ViewLedgerComponent},
  {path:'creditamt',component:CreditAmountComponent},
  {path:'defaulter',component:DefaulterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountHeadRoutingModule { }
