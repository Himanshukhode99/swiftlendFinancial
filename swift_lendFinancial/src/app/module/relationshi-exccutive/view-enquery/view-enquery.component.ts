import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/Shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-view-enquery',
  templateUrl: './view-enquery.component.html',
  styleUrls: ['./view-enquery.component.css']
})
export class ViewEnqueryComponent {

  constructor(public cs:CommonService,public fb:FormBuilder){}
  cust:Enquiry[];
  enq:Enquiry[];
 
  ngOnInit()
  {
    this.cs.getallEnquiry().subscribe((enquery:Enquiry[])=>{
    
      this.enq=enquery;
    })
  }
  
  cibil(c:Enquiry) {
   this.cs.cust=Object.assign({},c);
    }

}
