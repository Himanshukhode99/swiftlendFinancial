export class UserTypeOption 
{

    public static userOptions:Array<any>=[
        //0th index we have on object that have properties like re,oe,cm,ah
          {
            admin:[
              {label:'add employeee' ,path:'addemp'},
              {label:'app static' ,path:'appstatic'},
              {label:'manage employee' ,path:'mangemp'}

            ],
            re: [
                  {label:'Add Enquiry' , path:'addenq'},
                  {label:'View Enquiry' , path :'viewenq'},
                  {label:'view accept Loan', path:'acceptloan'},
                  {lable:'feedback' ,path:'feedback'}
                ],
            oe:[
              {label:'Check cibil' , path:'check_cibil'},
              {label:'Verify Documents' , path :'verify_doc'},
              {label:'requested enquries' , path :'requestinq'}
         
              ],
              cm:[
                {label:'verified-application' , path:'verify-app'},
              {label:'generate-sanction' , path :'gensanc'},
              
              ],  
               ah:[
                {label:'approve loan' , path:'approve-loan'},
              {label:'credit-amount' , path :'cedit_amt'},
              {label:'ledger' , path :'ledger'},
              {label:'view-ledger' , path :'view_ledger'},
              {label:'defaulter' , path :'default'}
               ]
        }
      ]
}
