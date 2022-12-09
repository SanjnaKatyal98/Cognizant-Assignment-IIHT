const emp={
    id:09,
    name:'Sanjna Katyal',
    sal:98000,
    doj:new Date('2022-02-18'),
    dept:{
        deptid:28,
        dname:'IT',
        mngrid:10
    },
    project:{
        pid:13,
        pname:'training',
        startdate:new Date('2022-11-10'),
        duration:'6mnths'
    },
    getServiceYr:function(){
        return (2022 - this.doj.getFullYear());
    }
};
let val=emp;
console.log(val);
console.log(val.sal);
console.log(val.id);
console.log(val.doj);
console.log(val.name);
console.log(emp.dept);
let val1=emp.getServiceYr();
console.log(`Service Years:${val1}`);
//for loop
const employee=[
    {name:'Shahid',id:12,dept:'business'},
    {name:'temp',id:0,dept:'temp'},
];
for(let i=0;i<employee.length;i++){
    console.log(`Employee details are-> ${employee[i].name} ${employee[i].id} ${employee[i].dept}`);
}
//for in loop
for (let i in emp){
    if (i==='project' || i==='dept'){
        for(let j in emp[i]){
            console.log(`${j}: ${emp[i][j]}`);
        }
    }
    else{
        console.log(`${i} : ${emp[i]}`);
    }
}