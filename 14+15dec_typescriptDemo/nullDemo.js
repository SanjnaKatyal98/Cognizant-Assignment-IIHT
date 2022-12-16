function check(str){
    
    //searching for aeiou globally in the str and i stands for insensitive search 
    const match = str.match(/[aeiou]/gi);

    if(match===null){

        return 0;
    }
    return match.length;

    

}
console.log(check('trn'));
    

//nullish ---  null or undefined 
//nullish coalescing assignment operator ??=
//??=  operator is applied to a variable only if it is null
//or it is undefined

//??= assignment operator

const x = {val1:100};
//if x.val is null or undefined ??= will assign 200 to x.val
x.val ??= 200;
console.log(x.val);


//??  nullish coalescing operator

//it is alogical operator that returns its rhs val if lhs is null or undefined
//lhs is defined then it will return lhs operand

const num1 = null ?? 100;
//what num1 have 
console.log(num1);
const num2 = 40 ?? 60 ;
console.log(num2);

//what will num2 get ? 

const user={id:111,name:'kiran',pet:{
    id:101,
    name:'tuffy'
}};

//optional chaining ?. questionmark and a dot.
// user.name 

console.log(user?.pet?.name);