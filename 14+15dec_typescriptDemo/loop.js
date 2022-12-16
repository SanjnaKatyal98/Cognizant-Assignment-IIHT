const students=['monika','meeta','sheetal'];
console.log('using for of loop to iterate')
//use for of to iterate
for(let element of students){
    console.log(element);
}

console.log('using traditionalfor loop')
//traditional for loop 
for(let i = 0 ; i < students.length;i++){
    console.log(students[i]);
}

console.log('using for of with one string')
const name = 'hetal';

for(let alpha of name){
    console.log(alpha);

}

console.log('using for of with Set');

const set = new Set([1,2,2,3,3,4,4]);

for(let i of set){
    console.log(i);}


console.log('for of with Map');

const map = new Map();
map.set('id',101);
map.set('salary',121222);

for(let [k,v] of map){
    console.log(`${k} ${v}`);
}


//examples of for ..... in loop

//for in , in the object properties 
console.log('using for in to iterate thru object properties')
const emp={id:11,name:'abc',salary:500000};

for(const prop in emp){
    //using associative array to see the value of the emp prop emp[prop]  emp[id] emp[name] emp[salary]
    console.log(`${prop} : ${emp[prop]}`);
}