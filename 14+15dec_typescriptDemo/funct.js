class Demo{

     constructor(){
        this.msg = "hello";
        console.log("Demo initialised");
     }
     
     /* function1(arr){
            return arr.filter(function(element){
                return (element === this.msg );
                })      } 
 */
      arrowfunction(arr){
        return arr.filter(element=>(element ===this.msg));
      }}

const d1 = new Demo("hello");
//console.log(d1.function1(["hello"]));
console.log(d1.arrowfunction(["hello"]));


const applicationStatus=['pending','approved','rejected'];

applicationStatus.forEach(e=>console.log(e));

console.log(applicationStatus.map(e=>e.length));


//(param)=>expression

//param=>expression

//(p1,p2,p3)=>{  // in curly braces for multiple statements of the body of the function}

//param=>{}

//rest parameters -- varargs -- (a,b,...c)=>{ }

f3=(a,b=200,c=100)=>{
    console.log(a,b,c);
   return a+b+c;
}
console.log(f3(120));


//use arrow functions 

f4=a=>a*5;

console.log(f4(5));


class Person1{

id=10;
getId=()=>
{console.log(`this is id ${this.id}`);


};}
let person =new Person1();

person.getId();