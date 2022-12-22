class MyMap{

    constructor(m){
        this.m = m;
    }

    keyValue(k){
        if(this.m.has(k)){
            return m.get(k);
        }
        else
            return `${k} key doesnt exist`;
    }

    deleteKey(k){
        if(this.m.has(k)){
            this.m.delete(k);
           return(`${k} deleted`);
        }
        else
            return `${k} key doesnt exist, cant be deleted`;
    }

    mapSize(){
        return this.m.size;
    }

    iterate(){
        console.log('map iteration using forEach');
        this.m.forEach((val,key)=>{
            console.log(key, val);
        });
    }
}


let m = new Map();
m.set('manvi', 22);
m.set('leo', 2);
m.set('ivnam', 12);

let myMap = new MyMap(m);

//check key value
console.log(myMap.keyValue('leo'));
console.log(myMap.keyValue('oel'));

//delete if key exist
console.log(myMap.deleteKey('ivnam'));
console.log(myMap.deleteKey('oel'));

//size of map
console.log('size is ', myMap.mapSize());

//iterate forEach
myMap.iterate();