import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NbElement'
})
export class NbElementPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    console.log(args);
    if(args == null) return value;
    return null;
  }

}