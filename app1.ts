export {}
//function <name of the function> (input parameter name : datatype, para2: datatype): return datatype
// m1 is variable name ,: , datatype = val
let m1:string=  'hello again!';

//when we use let or const or var , we declare a variable num is number 

let num=100;
let names:string[]=["arti","amish","bharat"];

let greeting=(name,msg):string=>{
       return `${msg} to ${name}`;
};

const str=greeting('siri','hello');
console.log(str);


function addNumbers(x:number,y:number):number{

   return x+y;

}

addNumbers(123,345);

console.log(typeof  num);

num=123;

//interface Employee -- give me the shape of Employee type
//wherever we want to implement some function  then we can go for class

//to give the shape to the object 
export interface Employee{
 id:number,
 name:string,
 sal:number,
 doj:Date

}

let emp1:Employee;
emp1={
 id:101,
 name:'Mitesh',
 sal:100000,
 doj:new Date()

}

console.log(emp1);


//string number boolean null undefined symbol
//object 



//if else
//do
//while 
//for
//break and continue

//switch case
//string number boolean -- String Number Boolean


//tuple --array --syntax is =like an array 
//number of elements in a tuple are fixed
//types are known but need not be same

let programmingSkills:[string,number,number?];

programmingSkills=['js',6];

let color,textColor:[number,number,number,number?];
color=[123,222,211];
textColor=[44,222,33,111];

console.log(color);
console.log(programmingSkills);