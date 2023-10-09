import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AppStatisticsComponent } from './app-statistics/app-statistics.component';
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ManageEmployeesComponent,
    AppStatisticsComponent,
    ViewEmployeeComponent,
    ViewEnquiryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
