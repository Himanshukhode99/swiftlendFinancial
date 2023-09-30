export class UserTypeOption 
{

    public static userOptions:Array<any>=[
        //0th index we have on object that have properties like re,oe,cm,ah
          {
            re: [
                  {label:'Add Enquiry' , path:'addenq'},
                  {label:'View Enquiry' , path :'viewenq'},
                  {label:'Apply For Loan', path:'applyloan'}
                ],
            oe:[
              {label:'Check cibil' , path:'check_cibil'},
              {label:'Verify Documents' , path :'verify_doc'},
         
              ]    
        }
      ]
}
