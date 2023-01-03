import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformDataPipe implements PipeTransform {
  strings:string[]=[];
  transform(value: string, char:string): string {
    this.strings=value.split(' ');
    return this.strings.join(char);
  }

}