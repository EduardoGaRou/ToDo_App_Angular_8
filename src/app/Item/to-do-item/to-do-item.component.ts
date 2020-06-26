import { ToDo } from './../../Interface/to-do';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/Service/to-do-service.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit { 
  @Input() todoItem: ToDo;
  @Output() deleted = new EventEmitter<number | string>();
  @Output() verified = new EventEmitter<number | string>();

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void { }

  deleteItem(delId: number | string) {
  	this.deleted.emit(delId);
  }

  toggleItem(togId: number | string) {
  	this.verified.emit(togId);
  }
}
