import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent {
  constructor(public cs:CommonService, public fb:FormBuilder  ){}


  emp:any[];
employeeform:FormGroup;
  
  ngOnInit()
  {
    this.getAllEmp();

  }

  edit(e:any)
  {
    this.cs.emp=Object.assign({},e);
  }

  delete(e:any)
  {
    //this.cs.delete(e).subscribe();
  }


  getAllEmp()
  {
   this.cs.getAllEmp().subscribe((ee:any[])=>{

    this.emp=ee;
   });

  }

}


