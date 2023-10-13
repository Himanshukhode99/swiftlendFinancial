import { Component } from '@angular/core';
import { CommonService } from 'src/app/Shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrls: ['./document-verification.component.css']
})
export class DocumentVerificationComponent {


  
  constructor(public cs:CommonService,public fb:FormBuilder , public router:Router ){}
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




    alert(c.first_name)
    

    this.router.navigateByUrl('http://localhost:4200/application/oe/verification')
    

  }

 
}
