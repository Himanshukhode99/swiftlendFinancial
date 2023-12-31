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
  cibilscore: number;

  constructor(private route:Router, private fb:FormBuilder,
    private activatedroute:ActivatedRoute,
    private cs:CommonService)
    {

  }
  
     
  
  
    enquiry:any
  

  emiForm: FormGroup;
    ngOnInit(): void {
      this.emiForm = this.fb.group({
        pan: ['', Validators.required],
        first_name:['', Validators.required],
         mob: ['', Validators.required],
      })


      this.activatedroute.snapshot.params['id'];
      this.cs.getByEmail(this.activatedroute.snapshot.params['id']).subscribe((e:any)=>{
        this.emiForm.patchValue(e);
        this.enquiry=e;


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
    first_name: string;
    date: Date;
    cibil: number;
    // cibilistatus:string;
    
    
  
    generateCibil(): void {
  
      // // // Validate PAN number
      //  if (!this.isValidPan(this.emiForm.value.panNumber)) {
       
      //  Swal.fire({
      //   position:'top',
      //    showConfirmButton:false,
      //    icon:'warning',
      //    title:'INVALID PAN NUMBER',
      //   timer:1500
          
        
      //  })
        
      //    return  ;
      // }
        
    
  
      // Generate a random number for CIBIL score (between 300 and 900)
      this.cibil = Math.floor(Math.random() * (900 - 400 + 1)) + 400;
    }
  
    isValidPan(pan: string): boolean 
    {
   
  
     
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      return panRegex.test(pan);
    }
    savecibil()
    {
      

      this.enquiry.cibilscore=this.cibil
      

      if(this.enquiry.cibilscore >=400 && this.enquiry.cibilscore <=500)
      {
         this.enquiry.cibilstatus = "Bad" ;
          this.cs.saveCibil(this.enquiry).subscribe();
      }
     if(this.enquiry.cibilscore>=501 && this.enquiry.cibilscore<=700)
      {
        this.enquiry.cibilstatus = "Good";

         this.cs.saveCibil(this.enquiry).subscribe();
      }
      if(this.enquiry.cibilscore>=701 && this.enquiry.cibilscore<=900)
      {
        this.enquiry.cibilstatus = "Excellent";
         this.cs.saveCibil(this.enquiry).subscribe();
      }


      alert(this.enquiry.cibilstatus)
    

alert("CIBIL Saved")
         

        


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
