import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Years'
})
export class YearsPipe implements PipeTransform {

  transform(value: any, args: String): any {
    if(args == null) return value;
    if(args == "") return value;
    if(args != null){
      return value.filter(item => item.year == args);
    }
  }
}