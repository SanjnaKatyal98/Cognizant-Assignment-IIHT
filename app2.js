let user={id:1, name:'kiran'};

/* let newUser=user;
newUser.location='Pune';
console.log(user.location);
 */

let newUser ={...user,location:'Pune'};
console.log(user.location);


//Pure function
//what is a Pure function
//a function will return exactly the same output every time if the input the same
//does not change the things which are not in its scope

//local variables of that function 
const data={id:1213,val:'amit'};
//function updateObj(data,member){//body }

//arrow function
const add=(x,y)=>x+y;
console.log(add(9,8));

function subtract(x,y){
    return x-y;
}
console.log(subtract(9,8));

const updateObj = (data,member)=>{

    //we have created newData = 
      const newData = {
          ...data,
          val2:member

      };

    return newData;

}

const fullData =updateObj(data,'sharma');
console.log(fullData);

const arr = [1,2,3,4,5];

const newArr =[...arr,7,8,9];

console.log(newArr);

function f1(a,b,c){
    return a+b*c;
}

const arr3=[3,4,6];

const [a,b,c] =arr3;


//can we use spread operator in function call
console.log(f1(...arr3));

function f2(a,b,c,d,e){
    return a*b*c*d/e;
}

console.log(f2(5,...arr3,9));
class Product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
const fields=[1111,'Keyboard',1200];

const p1 = new Product(...fields);

console.log(p1);

const arr4=[4,5,6,7,8];
const arr5=[9,11,23,34];

const arr6=[4,5,...arr5,6,7,8];
arr6.push(100);

console.log(arr6);

const newarr = [...arr4,...arr5,...arr6];

const obj1 = {id:1111,numOfSides:3};
const obj2={id2:2222,angle:45};

const obj3={...obj1,...obj2};

console.log(obj3);








const person={id:11,name:'tia'};
Object.assign(person,{location:'pune'});
console.log(person);