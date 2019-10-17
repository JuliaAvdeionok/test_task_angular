import { Pipe, PipeTransform } from '@angular/core';
import { Hit } from '../../models/models';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {
  transform(list: Hit[], filterText: string): any {
    return list ? list.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
