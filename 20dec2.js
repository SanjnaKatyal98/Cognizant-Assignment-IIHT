class Invoice{
    constructor(title,details,total,date){
        this.title=title;
        this.details=details;
        this.total=total;
        this.date=date;
    }

    getTitle(){
        return this.title;
    }
    getDetails(){
        return this.details;
    }
    getTotal(){
        return this.total;
    }
    getDate(){
        return this.date;
    }
}

class Printer{

    static print(invoice){
        return `Name:${invoice.getTitle()} 
                Details:${invoice.getDetails()} 
                Total:${invoice.getTotal()} 
                Date:${invoice.getDate()}`;
    }

}


let invoiceDetails=[new Invoice("Redmi Note 10 Pro Max","TNO-011232423",20000,new Date()),
new Invoice("Redmi Note 9 Pro Max","TNO-01132423",18000,new Date()),
new Invoice("Realme X","TNO-01132423",20000,new Date()),
new Invoice("Samsung Guru","TNO-01122423",2000,new Date())
];

invoiceDetails.forEach((e)=>{
    console.log(Printer.print(e));

});