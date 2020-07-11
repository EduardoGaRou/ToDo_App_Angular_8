import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ToDo } from './../../Interface/to-do';
import { ToDoService } from './../../Service/to-do-service.service';
import { LoginService } from './../../Service/login-service.service';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {

  @ViewChild('allTodos') allTodos: ElementRef;
  todoList: ToDo[] = [];
  tablist: string[] = ['All','Completed','Pending'];
  myfilter: string = 'All';

  constructor(
    private todoService: ToDoService,
    private loginService: LoginService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    console.log(this.allTodos);
  }

  ngAfterContentInit() {
    this.cdr.detectChanges();
  }

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
    this.todoList = this.todoService.toggleComplete(togId);
  }

  onSelectTab(current) {
    this.myfilter = current.title;
  }

  signout() {
    this.loginService.logout();
  }
}
