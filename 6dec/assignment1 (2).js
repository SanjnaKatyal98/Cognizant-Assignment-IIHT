const employee ={

    employeeId:2142631,

    name:"Dikshant",

    department:{

        id:111,

        name:"Full stack Dev",

        managerId:123

    },
    project:{
        pId:12345,
        title:"web dev",
        started:false,
    },

    salary:26000,

    dateOfJoining:new Date("2018-03-25"),

    getNumberOfServiceYears:function(){

        return (2022-this.dateOfJoining.getFullYear());

    }
}


console.log(employee);

console.log(employee.employeeId);

console.log(employee.name);

console.log(employee.department.id);

console.log(employee.department.name);

console.log(employee.salary);

console.log(employee.dateOfJoining);

console.log(employee.getNumberOfServiceYears());


const employees=[

    {id:1,name:"Dikshant",age:22},

    {id:2,name:"Shubham",age:22},

    {id:3,name:"Swapnil",age:22},

    {id:4,name:"Omkar",age:24}

];


for(let i=0;i<employees.length;i++){

    console.log(employees[i]);

}
//for in

for(i in employee){
    if(i=="department" || i =="project"){
        for(let j in employee[i]){
            console.log(`${j}: ${employee[i][j]}`);
        }
    }
    else{
        console.log(`${i}: ${employee[i]}`);
    }
}