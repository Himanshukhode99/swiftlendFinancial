import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';
import { Enquiry } from 'src/app/model/enquiry';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cibil-check',
  templateUrl: './cibil-check.component.html',
  styleUrls: ['./cibil-check.component.css']
})
export class CibilCheckComponent {

  constructor(private route:Router, private fb:FormBuilder,
    private activatedroute:ActivatedRoute,
    private cs:CommonService)
    {

  }
  
     
  top: number;
  monthlyInterestRatio: number;
  bottom: number;
  sp: number;
  full: number;
  emi: number;
    interestt: number;
    total: number;
  
  
  emiForm: FormGroup;
    ngOnInit(): void {
      this.emiForm = this.fb.group({
        pan: ['', Validators.required],
        name:['', Validators.required],
         mob: ['', Validators.required],
      })


      this.activatedroute.snapshot.params['id'];
      this.cs.getByEmail(this.activatedroute.snapshot.params['id']).subscribe((e:any)=>{
        this.emiForm.patchValue(e);
      });

      const modeldiv=document.getElementById('myModal');
  if(modeldiv!=null)
  {
  modeldiv.style.display='block';
  }
    }
    // update() {
    //   this.monthlyInterestRatio = (this.emiForm.value.interest / 100) / 12;
    //   this.top = Math.pow((1 + this.monthlyInterestRatio), this.emiForm.value.tenure*12);
    //   this.bottom = this.top - 1;
    //   this.sp = this.top / this.bottom;
    //   this.emi = ((this.emiForm.value.principal * this.monthlyInterestRatio) * this.sp);
    //   this.full = this.emiForm.value.tenure*12 * this.emi;
    //   this.interestt = this.full - this.emiForm.value.principal;
    // }
  
  
    panNumber: string;
    name: string;
    date: Date;
    cibil: number;
  
    generateCibil(): void {
  
      // // Validate PAN number
      // if (!this.isValidPan(this.emiForm.value.panNumber)) {
       
      //   // Swal.fire({
      //   //   position:'top',
      //   //   showConfirmButton:false,
      //   //   icon:'warning',
      //   //   title:'INVALID PAN NUMBER',
      //   //   timer:1500
          
        
      //   // })
        
      //   return  ;
      // }
        
    
  
      // Generate a random number for CIBIL score (between 300 and 900)
      this.cibil = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
    }
  
    isValidPan(pan: string): boolean 
    {
   
  
     
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      return panRegex.test(pan);
    }
  
    
    Closedmodel()
    {
      const modeldiv=document.getElementById('myModal');
      if(modeldiv!=null)
      {
    modeldiv.style.display='none';
    this.route.navigateByUrl("");
      }
      
    }


}
