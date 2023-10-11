import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-add-enquery',
  templateUrl: './add-enquery.component.html',
  styleUrls: ['./add-enquery.component.css']
})
export class AddEnqueryComponent {

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
      aadhar:[],
      loanamount:[]
    
     
      
  })
}
  save(){

   
      alert("ThankYou For Enquiry");
      this.enquiry.value.enquiryStatus="null";
      console.warn(this.enquiry.value);
    this.cs.saveEnquiry(this.enquiry.value).subscribe();
  
    // window.location.reload();

    this.enquiry.reset();

  }


}
