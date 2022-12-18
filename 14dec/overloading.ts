function add(a:number | string | boolean,b:number | string | boolean){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    if(typeof a === 'boolean' && typeof b === 'boolean'){
        if(a===true && b===true){
            return true;
        }
        if(a===false && b===true){
            return false;
        }
        if(a===false && b===false){
            return false;
        }
    }
}
console.log(add(10,28));
console.log(add(true,true));
console.log(add('sanjna','shahid'));

function add1(a:any,b:any){
    return a+b;
}

console.log(add1(1,98));
console.log(add1('9','1'));