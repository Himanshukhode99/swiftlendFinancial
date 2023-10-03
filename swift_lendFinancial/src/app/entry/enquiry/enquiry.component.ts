import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  constructor(private fb:FormBuilder,private router:Router , public cs:CommonService){}

  enquiry:FormGroup;
  
  
  ngOnInit(){
  this.enquiry=this.fb.group({
    name:[],
      email:[],
      age:[],
      mob:[],
      address:[],
      pan:[],
      cibil:[]
     
      
  })
}
  save(){
    alert("ThankYou For Enquiry");

    this.cs.saveEnquiry(this.enquiry.value).subscribe();




    console.log(this.enquiry.value)
    this.router.navigateByUrl("")

    

    


  }




}
