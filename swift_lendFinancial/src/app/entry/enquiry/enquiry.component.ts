import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  constructor(private fb:FormBuilder,private router:Router){}

  enquiry:FormGroup;
  
  
  ngOnInit(){
  this.enquiry=this.fb.group({
    name:[],
      email:[],
      age:[],
      mob:[],
      address:[],
      pan:[]
     
      
  })
}
  save(){
    alert("ThankYou For Enquiry");
    this.router.navigateByUrl("")
  }




}
