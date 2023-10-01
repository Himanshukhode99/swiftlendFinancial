import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userOption'
})
export class UserOptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if(value=='admin')
    {
      return "admin login..!"
    }
    else if(value=='re')
    {
      return "relationship Execetive..!"
    }
    else if(value=='oe')
    {
      return "Operational Execetive..!"
    }
    else if(value=='cm')
    {
      return "credit manager..!"
    }
    else if(value=='ah')
    {
      return "account head..!"
    }

    return null;
  }

}
