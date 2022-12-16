class Emp{
    constructor(id,name,sal){
        this.id=id;
        this.name=name;
        this.sal=sal;
    }
    getId(){
        return this.id;    
      }
    getName(){
          return this.name;
      }
    getSal(){
        return this.sal;
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
    setSal(sal){
        this.sal=sal;  
    }
}
let emp=new Emp();
let sanj=new Emp(9,'sanjna',980000);
let shahid=new Emp(28,'shahid',1000000);
let temp=new Emp(13,'temp',1200000);
let employee=[shahid,temp,sanj];

let sortByName=employee.sort(
    (a,b)=>{
        if(a.name===b.name){
            return a.salary < b.salary?-1:1;
        }
        else{
            return a.name>b.name?1:-1;
        }
    }
);
console.log(sortByName);

let button=document.getElementById("submit");
button.onclick=function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let salary=document.getElementById("salary").value;
    let  a=new Emp(employee.length+1,name,salary);
    employee.push(a);
    console.log(employee);
}

let sort=document.getElementById("sort");
sort.onclick=function(e){
    e.preventDefault();
    let table=document.createElement("table");
    let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML="id";
        name.innerHTML="name";
        salary.innerHTML="salary";

        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(salary);
        table.appendChild(tr);

    for(let i=0;i<employee.length;i++){
        let tr=document.createElement('tr');
        let id=document.createElement("td");
        let name=document.createElement("td");
        let salary=document.createElement("td");
        id.innerHTML=employee[i].id;
        name.innerHTML=employee[i].name;
        salary.innerHTML=employee[i].sal;

        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(salary);
        table.appendChild(tr);
    }
    table.style.border="2px solid pink";
    table.style.backgroundColor="aquamarine";
    document.body.appendChild(table);
}