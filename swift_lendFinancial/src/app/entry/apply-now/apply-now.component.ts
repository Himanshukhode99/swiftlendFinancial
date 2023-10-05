import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent {

  constructor(public fb:FormBuilder){}
  saveForm : FormGroup;

  

num:number = 0
  saveLocal(){

    this.num =this.num+1

  }
  back(){

    if(this.num>0)
{
    this.num= this.num- 1
}
  }
}

