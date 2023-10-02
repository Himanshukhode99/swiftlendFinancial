import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { AppStatisticsComponent } from './app-statistics/app-statistics.component';

const routes: Routes = [
  {
    path:'addemp',component:AddEmployeeComponent
  },
  {
    path:'manageemp',component:ManageEmployeesComponent
  },
  {
    path:'static',component:AppStatisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
