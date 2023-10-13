import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  constructor(public fb:FormBuilder, public cs:CommonService , public router:Router,public activeroute:ActivatedRoute){}

  personaldetails: FormGroup<any>; 
  num:number = 0
  saveLocal(){

    if(this.num<4)
    {
    this.num =this.num+1
    }
  }
  back(){

    if(this.num>0)
    {
    this.num= this.num-1
    }
  }

  customerArr:any[]=[];





  ngOnInit()
  {

   this.activeroute.snapshot.params['email'];

   this.cs.getLoanApplicationForm(this.activeroute.snapshot.params['email']).subscribe((a:any)=>{


  
    this.customerArr.push(a);
   })


  }



}
