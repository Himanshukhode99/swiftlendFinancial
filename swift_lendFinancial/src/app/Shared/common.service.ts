import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
  delete(e: any) {
    throw new Error('Method not implemented.');
  }
 
 
  cust: Enquiry;
  emp: any;
  
  
  constructor( public http: HttpClient) { }


  saveEnquiry(enquiry: Enquiry)
   {
    return this.http.post("http://localhost:9093/Swift_Lend_Financial/saveEnquiry",enquiry);
    }
    getallEnquiry()
    {
      return this.http.get("http://localhost:9093/Swift_Lend_Financial/getEnquiries");
    }

    saveLoanApplication(FormData: any) {
   
      return this.http.post("http://localhost:9099/Swift_Lend_Financial/saveCustomer",FormData);
    }

    getByEmail(id:string)
    {
      return  this.http.get("http://localhost:9093/Swift_Lend_Financial/getEnquiriesByMail/"+id);
    }


    getAllEmp() {


      return this.http.get("http://localhost:9099/Swift_Lend_Financial/getallemp")
    }

    
    


    employeeReg(formdata: FormData) {
     return this.http.post("http://localhost:9099/Swift_Lend_Financial/saveemp",formdata);
    }
}
