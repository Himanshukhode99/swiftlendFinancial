import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from '@angular/forms';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  
  constructor( public http: HttpClient) { }


  saveEnquiry(enquiry: Enquiry) {
    
    
    return this.http.post("savdjhsd",enquiry)
    

  }

}
