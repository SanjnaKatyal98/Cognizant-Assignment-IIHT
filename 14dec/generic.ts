function f<T>(args:T):T{
    console.log(args);
    return args;
}
console.log(f<number>(100));
console.log(f<string>("sanj"));
console.log(f<boolean>(true));

function funct<T, A,B>(arg1:T,arg2:A,arg3:B):B{
    console.log(`${arg1} ${arg2} ${arg3}`);
    return arg3;
}
funct(928,'sanj',false);
funct('mohd','shahid',false);

class Generic<T>{
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
let gen4 = new Generic2<string>("sanjna","shahid");
console.log(`${gen4.getProp1()} ${gen4.getProp2()}`);
let gen5 = new Generic2<number>(12121,1212122);
console.log(`${gen5.getProp1()} ${gen5.getProp2()}`);