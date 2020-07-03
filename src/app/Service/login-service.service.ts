import { Injectable } from '@angular/core';

import { ToDoUsers } from './../Interface/to-do-users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _isAuthenticated: boolean;
  users: ToDoUsers[] = [
  	{
  	  username: 'Lalo GR',
  	  email: 'lalogrougon@gmail.com',
  	  password: 'fullTS'
  	}
  ];

  constructor() { }

  get isAuthenticated(): boolean {
  	return this._isAuthenticated;
  }

  set isAuthenticated(value) {
  	this._isAuthenticated = value;
  }

  loadTodoUser(user: ToDoUsers) {
    return this.users.filter((data) => data.email === user.email);
  }

  createTodoUser(newUser: ToDoUsers) {
    let result;
    const userExist = this.loadTodoUser(newUser).length;
    if(!userExist) {
      this.users.push(newUser);
      result = { success: 'User created successfully!!! :^)' };
    } else {
      result = { error: 'User already exists!!! :^/' };
    }
    return result;
  }

}
