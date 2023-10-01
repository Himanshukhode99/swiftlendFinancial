import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditManagerRoutingModule } from './credit-manager-routing.module';
import { VerifiedApplicationComponent } from './verified-application/verified-application.component';
import { GenerateSanctionComponent } from './generate-sanction/generate-sanction.component';


@NgModule({
  declarations: [
    VerifiedApplicationComponent,
    GenerateSanctionComponent
  ],
  imports: [
    CommonModule,
    CreditManagerRoutingModule
  ]
})
export class CreditManagerModule { }
