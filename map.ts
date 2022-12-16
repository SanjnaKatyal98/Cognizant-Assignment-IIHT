function gen1<T>(arg1:T){

    console.log(arg1);

   

}

function gen2<T>(arg1:A,args2:A):A{

    if((typeof arg1)==="number"&& typeof args2==="number")

    return arg1+args2;

    else{

        return arg1;

    }

   

}

gen1<number>(100);

console.log(gen2<number>(100,200))

console.log(gen2("abc","xyz"));




class Gen<k,v>{

 

    private map:Map<k,v>;

 

    constructor(map:Map<k,v>){

        this.map=map;

    }

    setMap(map:Map<k,v>){

        this.map=map;

    }

    getMap(){

        return this.map;

    }

}

let map= new Map<string,number>();

map.set("id",1);

map.set("num",1234);

let m1= new Gen<string,number>(map);

 

let map1= new Map<string,boolean>();

map1.set("id",true);

map1.set("ispossible",false);

let m2= new Gen<string,boolean>(map1);