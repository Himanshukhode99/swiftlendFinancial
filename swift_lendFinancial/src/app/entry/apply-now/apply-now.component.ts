import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent {
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
   salaryS:any;
   d:any
   bank:any
   carQu:any
   for:any
   it:any




  ngOnInit(){

    this.personaldetails=this.fb.group({
      first_name:[],
      middle_name:[],
      last_name:[],
      mother_name:[],
      noOfdependent:[],
      dob:[],
      gender:[],
      mobile:[],
      email:[],
      

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





    }),

    // documents:this.fb.group({


    //   aadharcard:[],
    //   pancard:[],
    //   profile_photo:[],
    //   signature:[],
    //   salary_slip:[],
    //   driving_license:[],
    //   bank_statement:[],
    //   car_quatation:[],
    //   form16:[],
    //   income_tax_return:[]


    // })
   
   

    


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
// let localAddress:any=JSON.stringify(this.localAddress.value);
// let permenantAddress:any=JSON.stringify(this.permenantAddress.value);
// let BankDetails:any=JSON.stringify(this.BankDetails.value);


formdata.append("personaldetails", personalDetails);
// formdata.append("localAddress", localAddress);
// formdata.append("permenantAddress", permenantAddress);
// formdata.append("BankDetails", BankDetails);
formdata.append('aadharcard',this.aadharcard);
formdata.append('pancard',this.pancard);
formdata.append('profile_photo',this.profile_photo);
formdata.append('signature',this.signature);
formdata.append('salary_slip',this.salary_slip);
formdata.append('driving_license',this.driving_license);
formdata.append('bank_statement',this.bank_statement);
formdata.append('car_quatation',this.car_quatation);
formdata.append('form16',this.form16);
formdata.append('income_tax_return',this.income_tax_return);






this.cs.saveLoanApplication(formdata).subscribe();





alert("zal re baaa")

  }

  aadharcard:any;
      pancard:any;
      profile_photo:any;
      signature:any;
      salary_slip:any;
      driving_license:any;
      bank_statement:any;
      car_quatation:any;
      form16:any;
      income_tax_return:any;

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

      onselectsalarySlip(event:any){
        this.salary_slip =event.target.files[0];
        this.salarySlip.nativeElement.className="file_bg_color"
      }
      onselectDL(event:any){
        this.driving_license =event.target.files[0];
        this.Dl.nativeElement.className="file_bg_color"
      }
      onselectBAnkSatement(event:any){
        this.bank_statement =event.target.files[0];
        this.BankStatement.nativeElement.className="file_bg_color"
      }
      onselectQuatation(event:any){
        this.car_quatation =event.target.files[0];
        this.carQuatation.nativeElement.className="file_bg_color"
      }
      onselect16NO(event:any){
        this.form16 =event.target.files[0];
        this.fom16.nativeElement.className="file_bg_color"
      }
      onselectITR(event:any){
        this.income_tax_return =event.target.files[0];
        this.itr.nativeElement.className="file_bg_color"
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



