import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-vieeew',
  templateUrl: './vieeew.component.html',
  styleUrls: ['./vieeew.component.css']
})
export class VieeewComponent {

  constructor(public activerouter:ActivatedRoute , public cs:CommonService){}



  



  customerArr:any[]=[];


  change:number;



  ngOnInit()
  {

   this.activerouter.snapshot.params['email'];

   this.cs.getLoanApplicationForm(this.activerouter.snapshot.params['email']).subscribe((a:any)=>{


  
    this.customerArr.push(a);
   })

   this.activerouter.snapshot.params['www'];


   this.change=this.activerouter.snapshot.params['www'];


  }



}
