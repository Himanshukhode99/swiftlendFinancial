import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AppStatisticsComponent } from './app-statistics/app-statistics.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { RejectCustomerComponent } from './reject-customer/reject-customer.component';

const routes: Routes = [
  {
    path:'addemp',component:AddEmployeeComponent
  },
  {
    path:'manageemp',component:ManageEmployeesComponent
  },
  
 {
    path:'static',component:AppStatisticsComponent
    ,
    children:[
      {
        path:'viewemp',component:ViewEmployeeComponent
      },
      {
        path:'viewenq',component:ViewEnquiryComponent
      },
      {
        path:'rejectcust',component:RejectCustomerComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
