import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { ToDoContainerComponent } from './../../Container/to-do-container/to-do-container.component';
import { ToDoItemComponent } from './../../Item/to-do-item/to-do-item.component';
import { ToDoFormComponent } from './../../Form/to-do-form/to-do-form.component';
import { TabContainerComponent } from '../../Container/tab-container/tab-container.component';
import { TabItemComponent } from '../../Item/tab-item/tab-item.component';
import { EmptyHrefDirective } from '../../Directives/empty-href.directive';
import { FilterPipe } from '../../Pipes/filter.pipe';

@NgModule({
  declarations: [
  	ToDoContainerComponent,
  	ToDoItemComponent,
  	ToDoFormComponent,
  	TabContainerComponent,
  	TabItemComponent,
  	EmptyHrefDirective,
  	FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
