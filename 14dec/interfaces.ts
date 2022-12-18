interface Logger{
    log(msg:string):void;
}
const logger:Logger={
    log:function(msg:string):void{
        console.log(msg);
    }
};
logger.log('hello sanjna shahid');

interface Printable{
    print:()=>void;
}
let p:Printable={
    print:()=>console.log('display method')
};
p.print();

interface NewPrint extends Printable,Logger{}
let np:NewPrint={
    print: function (): void {
        console.log('printing from new print class');},
    log: function (msg: string): void {
            console.log('new print log')
        }
}
np.log('hi there');
np.print();