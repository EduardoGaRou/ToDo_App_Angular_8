import { Injectable } from '@angular/core';
import { ToDo } from './../Interface/to-do';

@Injectable()
export class ToDoService {

  private todoList: ToDo[];
  lastId: number;

  constructor() { }

  getTodos() {
  	this.todoList = [
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
  	return this.todoList;
  }

  addTodo(newTodo: ToDo) {
  	this.lastId = (!!this.todoList.length) ? +this.todoList[this.todoList.length-1].id : 0;
  	if (!newTodo.id) {
      newTodo.id = ++this.lastId;
  	}
  	newTodo.task = newTodo.task.trim();
  	console.log(newTodo);
  	this.todoList.push(newTodo);
  }

  deleteTodo(delId: number | string) {
    this.todoList = this.todoList.filter((data) => data.id != delId);
    console.log(this.todoList);
    return this.todoList;
  }

  toggleComplete(newTodo: ToDo) {
    return !newTodo.completed;
  }
}
