export {}
enum Status  {
    pending,
    approvedByFinanceOfficer,
    approvedByLandVerificationOfficer,
    approvedByManager,
    rejected
}
//blueprint for the loanApplication
interface LoanApplication{
    id:number,
    applicantName:string,
    doa:Date,
    status:Status,
    loanAmount:number
}

let loanApplication1:LoanApplication;

loanApplication1={

    id:10001,
    applicantName:'Mikesh',
    doa:new Date(),
    status:Status.approvedByFinanceOfficer,
    loanAmount:4500000
}

console.log(loanApplication1);
function checkStatus(loanApplication:LoanApplication){

   switch(loanApplication1.status){
    
      case Status.approvedByManager:
        console.log('Disbursement of loan will be in few days');
        break;

     case Status.approvedByFinanceOfficer:
        console.log('Approved by Finance office , will move to seek approval from Manager');
        break;
     case  Status.approvedByLandVerificationOfficer:
        console.log('Approved by Land Verification officer , will require approval from FO next');   
        break;
     default:
        console.log('still time')  ; 
    }

}
checkStatus(loanApplication1);