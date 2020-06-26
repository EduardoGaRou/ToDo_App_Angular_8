import { Component, OnInit } from '@angular/core';

import { ToDo } from './../../Interface/to-do';
import { ToDoService } from './../../Service/to-do-service.service';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {

  todoList: ToDo[] = [];

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
  	this.getTodoList();
  }

  getTodoList() {
  	this.todoList = this.todoService.getTodos();
  }

  deleteTask(delId: number | string) {
    this.todoList = this.todoService.deleteTodo(delId);
  }

  toggleTask(togId: number | string) {
    let togPos = 0;
    for (var i=0 ; i<this.todoList.length ; i+=1) {
      if (this.todoList[i].id == togId) {
        togPos = i;
        break;
      }
    }
    this.todoList[togPos].completed = this.todoService.toggleComplete(this.todoList[togPos]);
  }
}
