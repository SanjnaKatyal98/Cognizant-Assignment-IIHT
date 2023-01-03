import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
 name:'formatpipe'
})
export class FormatPipe  implements PipeTransform{
  transform(value: string, num:number):string {
    return value.repeat(num);
  }
}