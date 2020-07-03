//Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Service
import { ToDoService } from './Service/to-do-service.service';
import { ToDoNotFoundComponent } from './Utils/to-do-not-found/to-do-not-found.component';

//Components
import { AppComponent } from './app.component';
import { ToDoSignupComponent } from './Signup/to-do-signup/to-do-signup.component';
import { ToDoLoginComponent } from './Login/to-do-login/to-do-login.component';

@NgModule({
  declarations: [
    AppComponent,
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
