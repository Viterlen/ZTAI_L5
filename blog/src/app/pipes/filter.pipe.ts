import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../classes/post";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Post[], title:string): any {
    if(Boolean(title)) {
      return value.filter(post => post.title.includes(title.toLowerCase()));
    } else return value;
  }

}
