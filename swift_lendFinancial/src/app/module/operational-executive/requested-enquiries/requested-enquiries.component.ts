import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-requested-enquiries',
  templateUrl: './requested-enquiries.component.html',
  styleUrls: ['./requested-enquiries.component.css']
})
export class RequestedEnquiriesComponent {

  constructor(public cs:CommonService,public fb:FormBuilder,
    private route:ActivatedRoute){}
  cust:Enquiry[];
  enq:Enquiry[];

 
  ngOnInit()
  {
   this.enq=[]; 

    this.cs.getallEnquiry().subscribe((enquery:Enquiry[])=>{
    
      enquery.forEach(val=>{
        if(val.cibilstatus=="send to check cibil" )
        {
          this.enq.push(val);


        }
      })
      
    })

    

  }
  changeVar(){

  

  }
  



}
