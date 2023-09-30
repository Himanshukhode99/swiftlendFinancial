import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {top: number;
  monthlyInterestRatio: number;
  bottom: number;
  sp: number;
  full: number;

  emi: number;
  interestt: number;
  total: number;

  constructor(public fb: FormBuilder,private router:Router) { }

  emiForm: FormGroup;
  ngOnInit(): void {
    this.emiForm = this.fb.group({
      principal: ['', Validators.required],
      interest: ['', Validators.required],
      tenure: ['', Validators.required]
    })
    const modeldiv=document.getElementById('myModal');
if(modeldiv!=null)
{
modeldiv.style.display='block';
}
  }
  update() {
    this.monthlyInterestRatio = (this.emiForm.value.interest / 100) / 12;
    this.top = Math.pow((1 + this.monthlyInterestRatio), this.emiForm.value.tenure*12);
    this.bottom = this.top - 1;
    this.sp = this.top / this.bottom;
    this.emi = ((this.emiForm.value.principal * this.monthlyInterestRatio) * this.sp);
    this.full = this.emiForm.value.tenure*12 * this.emi;
    this.interestt = this.full - this.emiForm.value.principal;


    
  }

  Closedmodel()
  {
    const modeldiv=document.getElementById('myModal');
    if(modeldiv!=null)
    {
  modeldiv.style.display='none';
  this.router.navigateByUrl("");
    }
    
  }


}
