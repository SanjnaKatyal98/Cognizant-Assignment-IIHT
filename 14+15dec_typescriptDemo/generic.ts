function f1<T>(args:T):T{
    console.log(typeof args);
    return args;

}

console.log(f1<number>(100));

console.log(f1<string>("kiran"));

console.log(f1<boolean>(true));

//this is a function f2 which is a generics function
//how do you know its a generics function
//angular bracket besides the function name indicates that it is a generics function which takes any 3 datatypes and returns 3rd datatype value
function f2<T, A,B>(arg1:T,arg2:A,arg3:B):B{

    console.log(`${arg1} ${arg2} ${arg3}`);
    return arg3;

}


//how to create Generics class 


f2(123,'hiten',false);
f2('abc','abc',false);
class Generic<T>{
 
    //data member 
    private prop1:T;
    constructor(t){
        this.prop1=t;
    }

   setProp1(t){
    this.prop1=t;
   }

    getProp1():T{
    return this.prop1;
   }



}


let gen1 = new Generic<string>('nidhi');
console.log(gen1.getProp1());

 let gen2 = new Generic<number>(2323213);
console.log(gen2.getProp1());


class GenArr<T>{
  private arr:T[]=[];

  add(item:T){
    this.arr.push(item);
  }
  get():T[]{
    return this.arr;
  }

}

let strArr=new GenArr<string>();

strArr.add("hiten");
strArr.add("uday");
strArr.add("kailash");

console.log(strArr.get());


let numArr=new GenArr<number>();

numArr.add(122);
numArr.add(500);
numArr.add(600);

console.log(numArr.get());



class Generic2<T>{
 
    //data member 
    private prop1:T;
    private prop2:T;
    constructor(t:T,t2:T){
        this.prop1=t;
        this.prop2=t2;
    }

   setProp1(t){
    this.prop1=t;
   }

    getProp1():T{
    return this.prop1;
   }


   setProp2(t){
    this.prop2=t;
   }

    getProp2():T{
    return this.prop2;
   }

}
let gen4 = new Generic2<string>("abc","def");
console.log(`${gen4.getProp1()} ${gen4.getProp2()}`);



let gen5 = new Generic2<number>(12121,1212122);
console.log(`${gen5.getProp1()} ${gen5.getProp2()}`);


//create a generics function display with one arg , which displays on the console the arg

//create a generics function which adds both the args and return a value of similar type

//create generics class which has  a map key of type K and value of type v
//map <string,number>  map<string,boolean> map<number,number>