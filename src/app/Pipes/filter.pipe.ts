import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './../Interface/to-do';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: ToDo[], arg: string): ToDo[] {
    let taskDisplay;
    switch(arg) {
      case 'Completed':
      	taskDisplay = value.filter(item => item.completed);
      	break;
      case 'Pending':
      	taskDisplay = value.filter(item => !item.completed);
      	break;
      default:
      	taskDisplay = value;
      	break;
    }
    return taskDisplay;
  }

}
