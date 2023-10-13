import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeOption } from 'src/app/model/user-type-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router:Router)
  {
    
  }
  type:string;

  a:any;
  userRoles:Array<any>;
  @Input() getName:string;
  ngOnInit(): void {
   this.type= sessionStorage.getItem('type');


       this.userRoles= UserTypeOption.userOptions;
      //  if(this.type=='admin'){
      //   this.a= " admin";
      //  }

      //  if(this.type=='re'){
      //   this.a= " relationship executive";
      //  }

      //  if(this.type=='oe'){
      //   this.a= "operational executive";
      //  }

      //  if(this.type=='cm'){
      //   this.a= "credit Manager";
      //  }

      //  if(this.type=='ah'){
      //   this.a= "Account Head";
      //  }


  }

  navigateTo(path:string)
  {
    // this.router.navigateByUrl('/""/'+this.type+"/"+path)
  }
 
}
