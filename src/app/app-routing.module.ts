import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ToDoSignupComponent } from './Signup/to-do-signup/to-do-signup.component';
import { ToDoLoginComponent } from './Login/to-do-login/to-do-login.component';
import { ToDoNotFoundComponent } from './Utils/to-do-not-found/to-do-not-found.component';

//Guards
import { AuthGuard } from './Guards/auth.guard';
import { CanDeactivateSignupGuard } from './Guards/can-deactivate-signup.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: ToDoLoginComponent
  },
  {
    path: 'signup',
    component: ToDoSignupComponent,
    canDeactivate: [CanDeactivateSignupGuard]
  },
  {
    path: 'todolist',
    loadChildren: () => import('./Modules/todo/todo.module').then(m => m.TodoModule),
    canActivate: [AuthGuard]
  },
  {
  	path: '**',
  	component: ToDoNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
