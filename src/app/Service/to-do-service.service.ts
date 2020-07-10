import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToDo } from './../Interface/to-do';

@Injectable()
export class ToDoService {

  private todoList: ToDo[] = [
    {
      id: '1',
      task: 'Attend meeting',
      completed: false
    },
    {
      id: '2',
      task: 'Update code',
      completed: false
    }
  ];
  lastId: number;

  constructor(
    private router: Router
  ) { }

  getTodos(): ToDo[] {
  	return this.todoList;
  }

  addTodo(newTodo: ToDo): void {
  	console.log(this.todoList);
    this.lastId = (!!this.todoList.length) ? +this.todoList[this.todoList.length-1].id : 0;
  	if (!newTodo.id) {
      newTodo.id = ++this.lastId;
  	}
  	newTodo.task = newTodo.task.trim();
  	this.todoList.push(newTodo);
    this.router.navigate(['todolist']);
  }

  deleteTodo(delId: number | string): ToDo[] {
    this.todoList = this.todoList.filter((data) => data.id != delId);
    console.log(this.todoList);
    return this.todoList;
  }

  toggleComplete(newTodo: ToDo): boolean {
    console.log(newTodo);
    return !newTodo.completed;
  }

}
