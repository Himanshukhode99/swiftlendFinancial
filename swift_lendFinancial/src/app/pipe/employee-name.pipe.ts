import { Pipe, PipeTransform } from '@angular/core';
import { CommonService } from '../Shared/common.service';
import { LoginComponent } from '../entry/login/login.component';

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {
constructor(public cs:CommonService,private lc:LoginComponent){}


  transform(value: string, ...args: unknown[]): string {
    
    if(value==this.lc.name)
      {
        return this.lc.name;
      }
    return null;
  }

}
