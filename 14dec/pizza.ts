enum size{
    small,
    medium,
    large
};
enum base{
    regular= 'regular',
    handtossed= 'handtossed'
};
enum topping{
    veg,
    nonveg,
    cheezburst
};
interface pizza{
    id: number,
    top: topping,
    sizes: size,
    base: base
};

let val:pizza;
val={
    id:100,
    top:topping.veg,
    sizes:size.medium,
    base: base.handtossed
};
console.log(val);
let val1:pizza;
val1={
    id:200,
    top:topping.nonveg,
    sizes:size.large,
    base: base.regular
};
console.log(val1);
let val2:pizza;
val2={
    id:300,
    top:topping.cheezburst,
    sizes:size.small,
    base: base.regular
};
console.log(val1);

let arr:pizza[]=[val,val1,val2];
function outForDelivery(pizza: pizza){
    switch(pizza.sizes){
        case size.small:
            console.log('You have to pay 100rs at the time of delivery');
            break;
        case size.medium:
            console.log('You have to pay 200rs at the time of delivery');
            break;
        case size.large:
            console.log('You have to pay 300rs at the time of delivery');
            break;
        default:
            console.log('choose again!');

    }
}
for(let i of arr){
    console.log(`${i.id} ${size[i.sizes]} ${topping[i.top]}`);
    outForDelivery(i);
}