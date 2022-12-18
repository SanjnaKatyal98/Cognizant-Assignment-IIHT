class Person{
    name:string;
    age:number;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getInfo(){
        return `${this.name}  ${this.age}`;
    }
}
let p=new Person('sanjna',24);
console.log(p.getInfo());