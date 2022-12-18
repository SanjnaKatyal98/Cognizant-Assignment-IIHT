enum Category{
    saop='soap',bodywash='bodywash',shampoo='shampoo'
}
class Product{
    id:number
    name:string
    brand:string
    price:number
    Category
    constructor(id,name,brand,price,Category) {
        this.id=id;
        this.name=name;
        this.brand=brand;
        this.price=price;
        this.Category=Category;
    }
}
class ShoppingCart extends Product{
   listOfItem : Map <Product,number>;
}
function shoppingCart(pr:Product[]){
    let total=0;
    for (let i in pr){
        total=total+pr[i].price;
    }
    console.log(total);
}

let product1:Product;
let product2:Product;
let product3:Product;

product1={
    id:1
    ,name:'sanjna'
    ,brand:"shahid"
    ,price:450,
    Category:Category.bodywash
}
product2={
    id:1
    ,name:'sanjna'
    ,brand:"shahid"
    ,price:450,
    Category:Category.bodywash
}
product3={
    id:1
    ,name:'sanjna'
    ,brand:"shahid"
    ,price:450,
    Category:Category.bodywash
}

let pr:Product[]=[product1,product2,product3]
shoppingCart(pr)