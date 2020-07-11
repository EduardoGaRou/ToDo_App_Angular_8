import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, BehaviorSubject } from 'rxjs';
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
    return this.todoList;
  }

  toggleComplete(togId: number | string): ToDo[] {
    this.todoList = this.todoList.map((item: ToDo) => {
      if (item.id == togId) {
        item.completed = !item.completed;
      }
      return item;
    });
    //for (var i=0 ; i<this.todoList.length ; i+=1) {
    //  if (this.todoList[i].id == togId) {
    //    this.todoList[i].completed = !this.todoList[i].completed;
    //    break;
    //  }
    //}
    return this.todoList;
  }

}
