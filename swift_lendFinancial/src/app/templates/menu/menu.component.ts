import { Component } from '@angular/core';
import { UserTypeOption } from 'src/app/model/user-type-option';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menus:Array<any>;
  type:string;
ngOnInit(): void {
 this.menus= UserTypeOption.userOptions;
 console.log(this.menus);

this.type=sessionStorage.getItem('type');
}

}
