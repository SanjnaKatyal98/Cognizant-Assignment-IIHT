export {};

// create an enum Weekdays --all days
enum weekdays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};

// create a arrray daysOff with two off days
let daysOff = [weekdays.Monday, weekdays.Saturday];

// create a function convertTemperature(temp:number,fromTo:string):number{}
// eg: convertTemperature(70,'FToC') c

function convertTemperature(temp:number, from:string, to:string){

    let res:any;

    // C = [(°F-32)×5]/9
    if(from === "f" && to === "c"){
        res = ((temp-32)*5)/9;
        return res;
    }
    else if(from ==="c" && to === "f"){
        res =((temp*9)/5)+32;
        return res;
    }
    else{
        return 'error';
    }
}

let ans = convertTemperature(32, "f", "c");
console.log(`32 Fahreneit = ${ans} Celcius`);

ans = convertTemperature(0, "c", "f");
console.log(`0 Celcius = ${ans} Fahreneit`);

enum Direction{
    North ="moving to north",
    South ="moving to south",
    East="moving to eats",
    West="moving to west"
}

function move (dir:Direction){
    console.log(dir);
}
move(Direction.East);