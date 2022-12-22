function countPet(pets){
    let obj={};
    for(pet of pets){
        if(obj.hasOwnProperty(pet)){
            obj[`${pet}`]++;
        }else{
            obj[`${pet}`]=1;
        }
    }
    return obj;
}

var pets = ['dog','cat','dog','cat','turtle','rabbit','rabbit'];
console.log(countPet(pets));