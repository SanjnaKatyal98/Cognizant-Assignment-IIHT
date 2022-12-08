class Car{
  
    constructor(id,model,dealer,price){

        this.id=id;
        this.model=model;
        this.dealer=dealer;
        this.price=price;
    }
    get id(){
        return this._id;
    }
    set id(val){
     this._id =val;

    }
   
    get brand(){
      return this._brand;
    }
    set brand(val){

     this._brand =val;
    }
    disp(){
        console.log(`${this.id} ${this.price}`);
    }

}


class EV extends Car{

    constructor(id,model,dealer,price,batterylife){
       
        
       super(id,model,dealer,price);
        
    
        this.batterylife  =batterylife;
    }
    
    disp(){
    
        super.disp();
        console.log(this.batterylife);
    }
    
}


let carr = [];
let storage = window.localStorage;


addEventListener("DOMContentLoaded",addpage);



function ShowPage(res){
    let vw = document.getElementById("res");
    let ul = document.createElement("ul");
    let parse = JSON.parse(res);
    for(let cu in parse){
        console.log(parse[cu]);
        let li = document.createElement("li");
        li.innerHTML =  JSON.stringify(parse[cu]);
        ul.append(li);
    }
    document.body.appendChild(ul);
}

function loadData(){
    let res = storage.getItem("cars");
    let parse = JSON.parse(res);
    for(let k in parse){
        carr.push(parse[k]);
    }
}



function addpage(){
    loadData();
    console.log("Page Loaded");
    let res = storage.getItem("cars");
    console.log(res);
    ShowPage(res);
}




function saveDetails(){
    console.log("Saving");
    let id = document.forms["frm"]["id"].value;
    let model = document.forms["frm"]["model"].value;
    let dealer = document.forms["frm"]["dealer"].value;
    let price = document.forms["frm"]["price"].value;
    let blife = document.forms["frm"]["battery"].value;
    
    let data = new EV(id,model,dealer,price,blife);
     carr.push(data);
    console.log(carr);
    console.log(JSON.stringify(carr));
    storage.setItem("cars",JSON.stringify(carr));

    // let items = storage.getItem("cars");
    // console.log(items);

   
    // addpage();
    return false;
}


// let carr = new Array(
//     new EV(1,"Sports","maruti-xen",1400000,13),
//     new EV(2,"Family","Hyndai-zs",2600000,18),
//     new EV(3,"Hybrid","Toyota-LVR",1000000,8),
//     new EV(4,"Sports","Suzuki-RTS",6700000,19)
// );

// console.log(carr);


// console.log("---Adding---");
// console.log(carr.push(
//     new EV(5,"WagnR","HONDA-CDS",2000000,16) 
// ));
// console.log(carr);

// console.log("--------Popping--------");

// carr.pop();
// console.log(carr);

// console.log("--------Shifting--------");

// carr.shift();
// console.log(carr);

// console.log("--------unshifting--------");
// carr.unshift(new EV(7,"HyBsa","CXN",2000000,16) );
// console.log(carr);

// console.log("--------splicing--------");
// carr.splice(2,1);
// console.log(carr);