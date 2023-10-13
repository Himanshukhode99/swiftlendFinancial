import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';
import { Employee } from 'src/app/model/employee';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fb:FormBuilder,public router:Router,public cs:CommonService){}
  loginForm:FormGroup;
  userNamePass:any[];
   
   PASSWORDSSS:any
   name:any

   DESIGNATIONNN:any
  
  ngOnInit()
  {
    this.loginForm=this.fb.group({
      UserName:[],
      Password:[]
    })

  

  }

  onUserLogin()
  {
    

    this.cs.getAllEmp().subscribe((emp:any[])=>{

      this.userNamePass=emp;


      this.userNamePass.forEach((a:any)=>{


        if( un == a.user.username && ps == a.user.password){

          if(a.designation =="RE")
          {
            this.name=a.employeeName;
            alert(this.name);
            
            alert('Hello  ' + a.employeeName);
            sessionStorage.setItem('type','re');
            this.router.navigateByUrl('/application/re')
            
          }
          else if(a.designation=="OE")
          {
            this.name=a.employeeName;
            alert('hello'+a.employeeName)
            sessionStorage.setItem('type','oe');
            this.router.navigateByUrl('/application/oe')
    
          }
         else if(a.designation=='CM')
         {
          this.name=a.employeeName;
          alert('hello' +a.employeeName)
          sessionStorage.setItem('type','cm');
          this.router.navigateByUrl('/application/cm')
         }
         else if(a.designation=='AH')
            {
              this.name=a.employeeName;
              alert('hello'+a.employeeName)
             sessionStorage.setItem('type','ah');
            this.router.navigateByUrl('/application/ah')
            }
         
        }
       
  
      
 
     })
    })
    
   

    
    


    let un:string=this.loginForm.controls['UserName'].value;
    let ps:string=this.loginForm.controls['Password'].value;
   
    
    
    
    
      
    
    
   





    

    // if(   ps == this.PASSWORDSSS)
    // {
    //   alert("Check")

      // if(this.DESIGNATIONNN=="RE")
      // {
        
        // sessionStorage.setItem('type','re');
        // alert('Hello  ' + this.nammmm);
        // this.router.navigateByUrl('/application/re')
        
      // }
  
    //  else if(this.DESIGNATIONNN=="OE")
    //   {
    //     alert('hello'+this.nammmm)
    //     sessionStorage.setItem('type','oe');
    //     this.router.navigateByUrl('/application/oe')

    //   }
    //  else if(this.DESIGNATIONNN='CM')
    //   {
    //     alert('hello '+this.nammmm)
    //    sessionStorage.setItem('type','cm');
    //    this.router.navigateByUrl('/application/cm')

    //   }
    //  else if(this.DESIGNATIONNN=='AH')
    //   {
    //     alert('hello'+this.nammmm)
    //    sessionStorage.setItem('type','ah');
    //    this.router.navigateByUrl('/application/ah')
    //   }
    // }
   










  //   this.cs.getAllEmp().subscribe((e:any[])=>{
      
  //     e.forEach((a:any)=>{


  //       alert(a.user.UserName)
  //       if(un==a.user.UserName && ps == a.user.password)
  //       {

  //         alert("alla")
  //         if(a.designation=="RE")
  //         {
  //           alert("aat pn alla ")
  //           sessionStorage.setItem('type','re');
  //         alert('Hello re')
  //         this.router.navigateByUrl('/application/re')
  //       }
        

  //       }
  //       else{ alert("please Check the pass word")}
  //     })

     

  //   });
    if(un=='admin' && ps=='admin@123')
    {
     sessionStorage.setItem('type','admin');
     alert("Hello admin")
   this.router.navigateByUrl('/application/admin')
    }
    // else if(un==this. && ps=='re@123')
    // {
    //  sessionStorage.setItem('type','re');
    //  alert('Hello re')
    //  this.router.navigateByUrl('/application/re')
    // }
    // else if(un=='oe' && ps=='oe@123')
    // {
    //   alert('hello oe')
    //    sessionStorage.setItem('type','oe');
    //    this.router.navigateByUrl('/application/oe')
    // }
    // else if(un=='ah' && ps=='ah@123')
    // {
    //   alert('hello account manager')
    //    sessionStorage.setItem('type','ah');
    //    this.router.navigateByUrl('/application/ah')
    // }
    // else if(un=='cm' && ps=='cm@123')
    // {
    //   alert('hello credit manager')
    //    sessionStorage.setItem('type','cm');
    //    this.router.navigateByUrl('/application/cm')
    // }
    // else{
    //   alert('Enter valid login credentials..!')
 
    // }

  }

}
