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


  customer:any[];
  
  
  constructor( public http: HttpClient) { }


  saveEnquiry(enquiry: any)
   {
    return this.http.post("http://localhost:9099/Swift_Lend_Financial/saveEnquiry",enquiry);
    }
    getallEnquiry()
    {
      return this.http.get("http://localhost:9099/Swift_Lend_Financial/getEnquiries");
    }

    saveLoanApplication(FormData: any)
     {
   
      return this.http.post("http://localhost:9099/Swift_Lend_Financial/saveCustomer",FormData);
    }

    getAllCustomers()
    {
      return this.http.get("http://localhost:9099/Swift_Lend_Financial/getallcustomer")
    }

    getByEmail(id:string)
    {
      return  this.http.get("http://localhost:9099/Swift_Lend_Financial/getEnquiriesByMail/"+id);
    }


    getAllEmp() 
    {


      return this.http.get("http://localhost:9099/Swift_Lend_Financial/getallemp");
    }

    
    


    employeeReg(formdata: FormData) {
     return this.http.post("http://localhost:9099/Swift_Lend_Financial/saveemp",formdata);
    }


    saveCibil(enquiry:any) {
      
      return this.http.put("http://localhost:9099/Swift_Lend_Financial/updateCustomerEnquiry",enquiry);
    }


    reject(s:any)
    {
      return this.http.post("http://localhost:9099/saveRejected",s)
    }

    acceptedEnquiry(s:any){

      return this.http.post("http://localhost:9099/saveAccepted",s)
    }



    deleteBy(email :any)

    {

  
      return this.http.delete("http://localhost:9099/Swift_Lend_Financial/deleteCustomerEnquiry/"+email)
    }


    getApproved()
    {
      return this.http.get("http://localhost:9099/getApproved")
    }

    getApprovedByEmail(email: string)
    {
      return this.http.get("http://localhost:9099/getApprovedByEmail/"+ email)
    }



    getLoanApplicationForm(email:any)
    {
      return this.http.get("http://localhost:9099/Swift_Lend_Financial/getSingleCustomer/"+email)
    }

}
