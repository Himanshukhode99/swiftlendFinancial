import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHeadRoutingModule } from './account-head-routing.module';
import { ApproveLoanComponent } from './approve-loan/approve-loan.component';
import { CreditAmountComponent } from './credit-amount/credit-amount.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { DefaulterComponent } from './defaulter/defaulter.component';


@NgModule({
  declarations: [
    ApproveLoanComponent,
    CreditAmountComponent,
    LedgerComponent,
    ViewLedgerComponent,
    DefaulterComponent
  ],
  imports: [
    CommonModule,
    AccountHeadRoutingModule
  ]
})
export class AccountHeadModule { }
