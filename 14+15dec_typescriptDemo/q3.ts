class Genric<K,V>{
    private arr:K[]=[]
    private arr2:V[]=[]
    add(item:K,item2:V){
        this.arr.push(item)
        this.arr2.push(item2)
    }
    get():K[]{
        return this.arr
    }
    get2():V[]{
        return  this.arr2
    }

}
let str = new Genric<string,number>()
str.add("ayush",45)
console.log(`${str.get()} and ${str.get2()}`)

let str2 = new Genric<string,boolean>()
str2.add("ayush",  Boolean(4) )
console.log(`${str.get()} and ${str.get2()}`)

let str3 = new Genric<number,number>()
str3.add(45,45)
console.log(`${str3.get()} and ${str3.get2()}`)