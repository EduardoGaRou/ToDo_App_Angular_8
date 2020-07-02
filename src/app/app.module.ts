//Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Service
import { ToDoService } from './Service/to-do-service.service';

//Components
import { AppComponent } from './app.component';
import { ToDoContainerComponent } from './Container/to-do-container/to-do-container.component';
import { ToDoItemComponent } from './Item/to-do-item/to-do-item.component';
import { ToDoFormComponent } from './Form/to-do-form/to-do-form.component';
import { ToDoSignupComponent } from './Signup/to-do-signup/to-do-signup.component';
import { ToDoLoginComponent } from './Login/to-do-login/to-do-login.component';
import { ToDoNotFoundComponent } from './Utils/to-do-not-found/to-do-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoContainerComponent,
    ToDoItemComponent,
    ToDoFormComponent,
    ToDoSignupComponent,
    ToDoLoginComponent,
    ToDoNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
