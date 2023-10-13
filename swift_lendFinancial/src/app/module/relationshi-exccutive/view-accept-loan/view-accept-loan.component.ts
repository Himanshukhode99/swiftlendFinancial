import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';
import { LoanApplicationComponent } from '../loan-application/loan-application.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-view-accept-loan',
  templateUrl: './view-accept-loan.component.html',
  styleUrls: ['./view-accept-loan.component.css']
})
export class ViewAcceptLoanComponent {

  constructor(public cs: CommonService , public router:Router , public fb:FormBuilder) { }


  approved: any[] = [];

  loanapp:FormGroup;
  ngOnInit() {

    this.cs.getApproved().subscribe((app: any[]) => {

      this.approved = app;











    })
  }


  saaa(){}

}
