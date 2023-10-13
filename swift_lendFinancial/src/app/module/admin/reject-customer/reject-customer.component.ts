import { Component } from '@angular/core';
import { CommonService } from 'src/app/Shared/common.service';
import { RejectCustomer } from 'src/app/model/reject-customer';

@Component({
  selector: 'app-reject-customer',
  templateUrl: './reject-customer.component.html',
  styleUrls: ['./reject-customer.component.css']
})
export class RejectCustomerComponent {

  constructor(public cs:CommonService){}
  rej:RejectCustomer[];

  ngOnInit()
  {
    this.cs.getAllReject().subscribe((reje:RejectCustomer[])=>{
           this.rej=reje
    })
  }
}
