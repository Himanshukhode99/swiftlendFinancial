import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifiedApplicationComponent } from './verified-application/verified-application.component';
import { GenerateSanctionComponent } from './generate-sanction/generate-sanction.component';

const routes: Routes = [
  {
    path:'verifiedapp',component:VerifiedApplicationComponent
  },
  {
    path:'genratesanction',component:GenerateSanctionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditManagerRoutingModule { }
