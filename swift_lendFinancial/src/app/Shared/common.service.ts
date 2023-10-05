import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  cust: Enquiry;
  
  
  constructor( public http: HttpClient) { }


  saveEnquiry(enquiry: Enquiry)
   {
    return this.http.post("http://localhost:9093/Swift_Lend_Financial/saveEnquiry",enquiry);
    }
    getallEnquiry()
    {
      return this.http.get("http://localhost:9093/Swift_Lend_Financial/getEnquiries");
    }

}
