interface Colorable{
    color(msg:string):void
}

const color1:Colorable ={
    color: function (msg:string):void{
        console.log(msg)
    }
}

const color2:Colorable ={
    color: function (msg:string):void{
        console.log(msg)
    }
}

color1.color("Red")
color2.color("black")

interface Printable {
    print: () => void;
}

interface DigitalPrint extends Colorable, Printable{

}

let printDigital:DigitalPrint = {
    print: function ():void{
        console.log('Inside the Digital print Object 1')
    },
    color: function (msg: string) :void{
        console.log(msg)
    }
}

printDigital.print()
printDigital.color("Yellow")

let printDigital2:DigitalPrint = {
    print: function ():void{
        console.log('Inside the Digital print Object 2')
    },
    color: function (msg: string) :void{
        console.log(msg)
    }
}

printDigital2.print()
printDigital2.color("Grey")