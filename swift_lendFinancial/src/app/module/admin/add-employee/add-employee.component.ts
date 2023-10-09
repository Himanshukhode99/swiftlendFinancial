import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  personaldetails: FormGroup<any>;


  constructor(public fb:FormBuilder, public cs:CommonService , public router:Router){}
  saveForm : FormGroup;
  @ViewChild("adhar") addhar:ElementRef;
  @ViewChild("pan") pan:ElementRef;
  @ViewChild("profile") profile:ElementRef;
  @ViewChild("sign") sign:ElementRef;
  @ViewChild("salarySlip")salarySlip:ElementRef;
  @ViewChild("Dl")Dl:ElementRef;
  @ViewChild("BankStatement")BankStatement:ElementRef;
  @ViewChild("carQuatation")carQuatation:ElementRef;
  @ViewChild("fom16") fom16:ElementRef;
  @ViewChild("itr")itr :ElementRef;



  reader=new FileReader();
   addharDoc:any;
   panImg:any;
   profImg:any;
   signImg:any;
  



  ngOnInit(){

    this.personaldetails=this.fb.group({
      employeeName:[],
      mobile:[],
      dob:[],
      email:[],
      gender:[],
      designation:[],
      

    localAddress: this.fb.group({
        house_number: [],
        landmark: [],
        street_name: [],
        city_name: [],
        taluka: [],
        district: [],
        state: [],
        country: [],
        pin_code: []
      }),

   

 
      permenantAddress: this.fb.group({
      house_number: [],
      landmark: [],
      street_name: [],
      city_name: [],
      taluka: [],
      district: [],
      state: [],
      country: [],
      pin_code: []
    }),

  
    bankDetails:this.fb.group({
      accountNo:[],
      acholdername:[],
      bankName:[],
      bankBranchName:[],
      bankifsccode:[],
      accounttype:[]





    })

 
   

    


    })

    




    
   



  }



  

num:number = 0
  saveLocal(){


    this.num =this.num+1
    
    
    console.log(this.num)

   
    if(this.num==5)
    {
      this.FinalDoc();

      this.router.navigateByUrl("/")
    } 
  
console.log(this.personaldetails.value)

  }
  back(){

    if(this.num>0)
{
    this.num= this.num- 1
}
  }

get localAddress():any
{
  return this.personaldetails.controls['localAddress'].value;
}
 



  FinalDoc(){

  

let personalDetails:any=JSON.stringify(this.personaldetails.value);
let formdata=new FormData;



formdata.append("personaldetails", personalDetails);
formdata.append('aadharcard',this.aadharcard);
formdata.append('pancard',this.pancard);
formdata.append('profile_photo',this.profile_photo);
formdata.append('signature',this.signature);


this.cs.employeeReg(formdata).subscribe();





alert("zal re baaa")

  }

  aadharcard:any;
      pancard:any;
      profile_photo:any;
      signature:any;
     

      onselectAddharCard(event:any){
        this.aadharcard =event.target.files[0];
        this.addhar.nativeElement.className="file_bg_color"

        
      
      }

      onselectpanCard(event:any){
        this.pancard =event.target.files[0];
        this.pan.nativeElement.className="file_bg_color"

        this.reader.onloadend= (e)=>this.panImg=this.reader.result;
        this.reader.readAsDataURL(this.pancard);
        
      }
      onselectProfile(event:any){
        this.profile_photo =event.target.files[0];
        this.profile.nativeElement.className="file_bg_color"

        this.reader.onloadend= (e)=>this.profImg=this.reader.result;
        this.reader.readAsDataURL(this.profile_photo);
      }
      onselectsign(event:any){
        this.signature =event.target.files[0];
        this.sign.nativeElement.className="file_bg_color"

        
      }

     












  sameAs(){
   
    this.personaldetails.controls['permenantAddress'].patchValue(
      {
      house_number: this.localAddress.house_number,
      landmark: this.localAddress.landmark,
      street_name:this.localAddress.street_name,
      city_name: this.localAddress.city_name,
      taluka: this.localAddress.taluka,
      district: this.localAddress.district,
      state: this.localAddress.state,
      country: this.localAddress.country,
      pin_code:this.localAddress.pin_code
   
    }
)
  }







}
