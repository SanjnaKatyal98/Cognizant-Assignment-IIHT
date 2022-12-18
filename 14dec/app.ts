interface Emp{
    id:number,
    name:string,
    sal:number,
    doj:Date
}
let e:Emp;
e={
    id:9,
    name:'sanj',
    sal:980000,
    doj:new Date()
}
console.log(e);

let names:string[]=["shahid","sanjna","taylor"];
let mssg:string="hello";
let greeting=(names,mssg):string=>{
    return `${mssg} to ${names}`;
};