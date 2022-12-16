class Student{

    constructor(id,name,email,batchCode){
        this.id=id;
        this.name=name;
        this.email=email;
        this.batchCode=batchCode;

    }
    getId(){
      return this.id;    
    }

    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getBatchCode(){
        return this.batchCode;
    }
    setId(id){
        if(id===''){
            throw 'Id cannot be empty';
        }
        this.id=id;
    }
    setName(name){
        this.name=name;
    
    }
    setBatchCode(batchCode){
        this.batchCode=batchCode;

    }
    setEmail(email){
        this.email=email;
    }


}

let amit = new Student();
amit.setId(1111);
amit.setName('Amit Sharma');
amit.setEmail('amit@gmail.com');
amit.setBatchCode('CWC');

console.log(amit);

class Batch{

    constructor(students){
        this.students=students;
    }
     


}


const nisha= new Student(1234,'Nisha','nisha@gmail.com','CWC');
const hemant= new Student(1222,'Hemant','heam@gmail.com','FSD');
const sagar= new Student(12222,'Sagar','nisha@gmail.com','CWC');
const nikhil= new Student(4545,'Nikhil','heam@gmail.com','FSD');
const tia= new Student(7677,'tia','nisha@gmail.com','CWC');
const piyush= new Student(1111,'Piyush','heam@gmail.com','FSD');

const students =[amit,nisha,nikhil,hemant,sagar,tia,piyush];

let cwcbatch =  students.filter(
    student=>student.batchCode==='CWC'
);

console.log(cwcbatch);
let angularbatch =new Batch(cwcbatch);

console.log(angularbatch);

let sortByNames = students.sort(
(a,b)=>(a.name > b.name) ?1 :(a.name<b.name)?-1:0);

console.log(sortByNames);
//includes -- testing some values being present
//arr.some(num=>num>5)   -- 10 -- few even numbers some filter to check whethere are there few even number --true will be returned even if i am looking for even number if 1 found

//arr.every(num=>num%2==0)  === true , 
let emps=new Map();
emps.set(amit,amit.batchCode);
emps.set(nisha,nisha.batchCode);

console.log(emps.get(nisha));

emps.set(nisha,"fast track")
    .set(tia,"java full stack")
    .set(nikhil,"react ");
console.log('displaying all the values of emps map')
for(let batchCode  of emps.values()){
    console.log(batchCode);

}    
console.log('displaying all the keys of emps map');
for(let emp of emps.keys()){
    console.log(emp);
}


console.log('displaying the entry set of emps map');
for(let entrySet of emps){
    console.log(entrySet);

}