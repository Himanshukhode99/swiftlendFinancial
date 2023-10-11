import { Component } from '@angular/core';
import { CommonService } from 'src/app/Shared/common.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  constructor(public cs:CommonService){}
  emp:Employee[];

  ngOnInit()
  {
    this.cs.getAllEmp().subscribe((empl:Employee[])=>{
           this.emp=empl
    })
  }
}
