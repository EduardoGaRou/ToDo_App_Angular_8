import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ToDoService } from './Service/to-do-service.service';
import { AppComponent } from './app.component';
import { ToDoContainerComponent } from './Container/to-do-container/to-do-container.component';
import { ToDoItemComponent } from './Item/to-do-item/to-do-item.component';
import { ToDoFormComponent } from './Form/to-do-form/to-do-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoContainerComponent,
    ToDoItemComponent,
    ToDoFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
