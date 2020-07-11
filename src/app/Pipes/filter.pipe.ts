import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from './../Interface/to-do';
import { ToDoService } from './../Service/to-do-service.service';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  constructor(private todoService: ToDoService) { }

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
