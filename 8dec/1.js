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

let car1 = new Car(9281098,'zxi','creta',9000000);

car1.disp();



let car2=new Car();

car2.id = 09281098;

car2.brand='audi';



console.log(car2.id);

console.log(car2.brand);