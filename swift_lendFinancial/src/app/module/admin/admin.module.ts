import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AppStatisticsComponent } from './app-statistics/app-statistics.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ManageEmployeesComponent,
    AppStatisticsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }