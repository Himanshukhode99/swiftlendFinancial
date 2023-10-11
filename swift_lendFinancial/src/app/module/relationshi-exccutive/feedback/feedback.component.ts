import { Component } from '@angular/core';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  constructor(public cs:CommonService){}
checked:any[]=[];

  ngOnInit()
  {
    this.cs.getallEnquiry().subscribe((s:any[])=>{

      s.forEach((v:any)=>{

if(v.cibilscore != 0){

  this.checked.push(v)
}
        
      })

  

    })

  }
  approve(s:any){

    this.cs.acceptedEnquiry(s).subscribe();

    alert("Mail Sent")


    this.cs.deleteBy(s.email).subscribe();

    window.location.reload();
  }

  reject(s:any){

    this.cs.reject(s).subscribe();

    alert("rejected");


    this.cs.deleteBy(s.email).subscribe();

    alert("deleted Successfully")

    window.location.reload();

  }

}
