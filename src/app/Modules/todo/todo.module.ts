import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { ToDoContainerComponent } from './../../Container/to-do-container/to-do-container.component';
import { ToDoItemComponent } from './../../Item/to-do-item/to-do-item.component';
import { ToDoFormComponent } from './../../Form/to-do-form/to-do-form.component';

@NgModule({
  declarations: [
  	ToDoContainerComponent,
  	ToDoItemComponent,
  	ToDoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
