export { }
//es5
function Person(id,name){
    this.id=id;
    this.name=name;
}

Person.prototype.address=function(){};
let p=new Person(111,'max');
console.log(p);
// ecmascript 6 specifications

class Game{

    protected id:number;
    protected name:string;
    private multiplayer:boolean;
    private online:boolean;
    readonly gameCode:number;

    constructor(id,name,multiplayer,online,gameCode){
        this.id=id;
        this.name=name;
        this.multiplayer=multiplayer;
        this.online=online;
        this.gameCode=gameCode;
    }
 //public is the default access specifier 
    public getDetails(){
        return `${this.id} ${this.name} `;
    }
}

let destiny = new Game(111,'Destiny',true,true,445455);
console.log(destiny.getDetails());


//this only came in ES6 
class VRGame extends Game{
   
    disp = ()=>{
        console.log(`${this.name}`)
    }

}

let vr=new VRGame(1121,'Minecraft',true,true,4545455);
vr.disp();


//create a class Product with id,name,brand,price ,category 

//create a class ShoppingCart which has map of product as key and number of items as value

//write a method to calculate the cart's total price


let map=new Map();
map.set(p1,)