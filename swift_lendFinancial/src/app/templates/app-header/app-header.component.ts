import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/entry/login/login.component';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  @Input() getuseroption:string;

 

  
  constructor(private router: Router ) { }
 
  logout(){

    this.router.navigateByUrl("/login");
  }

}
