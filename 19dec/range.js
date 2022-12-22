class Range{

    constructor(start, end){
        this.start = start;
        this.end = end;
    }

    includes(x){
        if(x > this.end || x <this.start){
            return false;
        }
        else{
            return true;
        }
    }

    toString(){
        return ` ${this.start} .... ${this.end}`;
    }

}

class Span extends Range{
    // 100,10 => 100,101,.....109
    constructor(startNo, count){
        super(1,startNo);
        this.count=count;
    }

    display(){
        for(let i = this.end; i<this.end+this.count;i++){
            console.log(i);
        }
    }
}

//12...20
function parse(str){
    let min = parseInt(str.charAt(0)+str.charAt(1));
    let max = parseInt(str.charAt(5)+str.charAt(6));

    return new Range(min, max);
}

// let range = new Range(4,10);
// console.log(range.includes(5));
// console.log(range.includes(1));
// console.log(range.includes(12));
// console.log(range.toString());

// let obj = parse('12...20');
// console.log(obj.toString());


let span = new Span(100,10);
span.display();