import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  constructor(public fb:FormBuilder, public cs:CommonService , public router:Router){}

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
}
