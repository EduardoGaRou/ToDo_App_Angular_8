import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoContainerComponent } from './../../Container/to-do-container/to-do-container.component';
import { ToDoFormComponent } from './../../Form/to-do-form/to-do-form.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoContainerComponent
  },
  {
  	path: 'newTask',
  	component: ToDoFormComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
