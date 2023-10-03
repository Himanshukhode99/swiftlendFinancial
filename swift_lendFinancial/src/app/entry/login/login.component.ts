import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fb:FormBuilder,public router:Router){}
  loginForm:FormGroup;

  ngOnInit()
  {
    this.loginForm=this.fb.group({
      UserName:[],
      Password:[]
    })
  }

  onUserLogin()
  {
    console.log(this.loginForm.value);
    let un:string=this.loginForm.controls['UserName'].value;
    let ps:string=this.loginForm.controls['Password'].value;

    if(un=='admin' && ps=='admin@123')
    {
     sessionStorage.setItem('type','admin');
     alert("Hello admin")
   this.router.navigateByUrl('/application/admin')
    }
    else if(un=='re' && ps=='re@123')
    {
     sessionStorage.setItem('type','re');
     alert('Hello re')
     this.router.navigateByUrl('/application/re')
    }
    else if(un=='oe' && ps=='oe@123')
    {
      alert('hello oe')
       sessionStorage.setItem('type','oe');
       this.router.navigateByUrl('/application/oe')
    }
    else if(un=='ah' && ps=='ah@123')
    {
      alert('hello account manager')
       sessionStorage.setItem('type','ah');
       this.router.navigateByUrl('/application/ah')
    }
    else if(un=='cm' && ps=='cm@123')
    {
      alert('hello credit manager')
       sessionStorage.setItem('type','cm');
       this.router.navigateByUrl('/application/cm')
    }
    else{
      alert('Enter valid login credentials..!')
 
    }

  }

}
