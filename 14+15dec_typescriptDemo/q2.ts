function gen1<T>(arg1:T){

    console.log(arg1);

}



function gen2<A>(args1,args2):A{

    if((typeof args1)==="number" && typeof args2 ==="number")

    return args1+args2;

    else if((typeof args1)==="string" && typeof args2 ==="string"){

        return args1.concat(args2);

    }

    else{

        return args1;

    }

}



gen1<number>(100);

console.log(gen2<number>(100,200));

console.log(gen2("abc","xyz"));



class Gen<K,V>{

    private map:Map<K,V>;



    constructor(map:Map<K,V>){

        this.map=map;

    }



    setMap(map:Map<K,V>){

        this.map=map;

    }

    getMap(){

        return this.map;

    }



}

let map=new Map<string,number>() ;

map.set("id",1);

map.set("num",1234);

let m1=new Gen<string,number>(map);




let map1=new Map<string,boolean>() ;

map1.set("hasId",true);

map1.set("isPossible",false);

let m2=new Gen<string,boolean>(map1);