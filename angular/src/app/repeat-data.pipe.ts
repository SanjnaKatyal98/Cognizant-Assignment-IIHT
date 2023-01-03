import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatData'
})
export class RepeatDataPipe implements PipeTransform {
  result:string="";
  transform(value: string, arg1:number): string {
    
    for(let i=0;i<arg1;i++)
      this.result+=value+" ";
    
    return this.result;

  }

}