import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/Shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';

@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrls: ['./document-verification.component.css']
})
export class DocumentVerificationComponent {

  
  constructor(public cs:CommonService,public fb:FormBuilder){}
  cust:Enquiry[];
  enq:any[];
 
  ngOnInit()
  {
    this.cs.getAllCustomers().subscribe((enquery:any[])=>{
    
      this.enq=enquery;
      
    })
  }
  
  // cibil(c:Enquiry) {

  //   c.cibilstatus="send to check cibil";
  //   console.warn(c);
  
  //   this.cs.saveCibil(c).subscribe();
  //   window.location.reload();
  //   }


  verify(c:any){

    

  }

}
