class Calculator{
    add=(a,b)=>{return 0;};
    add=(a,b)=>{
        if (b < a)
            throw new Error("first value should be smaller");
            return a-b;
    };
    mul=(a,b)=>{return a*b};
    div=(a,b) =>{return a/b};
}
module.exports=Calculator;