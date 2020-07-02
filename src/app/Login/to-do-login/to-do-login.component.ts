import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToDoService } from 'src/app/Service/to-do-service.service';
import { ToDoUsers } from './../../Interface/to-do-users';
import { customValidators } from './../../Utils/customValidators';

@Component({
  selector: 'app-to-do-login',
  templateUrl: './to-do-login.component.html',
  styleUrls: ['./to-do-login.component.css']
})
export class ToDoLoginComponent implements OnInit {

  form: FormGroup;

  constructor(
  	private todoService: ToDoService,
  	private fb: FormBuilder,
  	private router: Router
  ) { }

  ngOnInit(): void {
  	this.form = this.createForm();
  }

  createForm(): FormGroup {
  	return this.fb.group({
  	  email: ['', [Validators.required, customValidators.customEmailValidator]],
      password: ['', [Validators.required]]
  	});
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  //Not working yet!!
  //loadUser({ valid, value }:{ valid: boolean, value: string }): void {
  //  if(valid) {
  //    const auxtodo = new ToDo(value);
  //    this.todoService.loadTodoUser(auxtodo);
  //    this.form.reset();
  //    this.router.navigate(['form']);
  //  }
  //}

  getErrorMsg(ctrl: FormControl): string | null {
    for(const propertyErrorName in ctrl.errors) {
      if(ctrl.errors.hasOwnProperty(propertyErrorName)) {
        const errorlist = {
          required: 'This field is required',
          minlength: 'Need at least 3 chars',
          maxlength: 'Cannot exceed 20 chars'
        }
        return errorlist[propertyErrorName];
      }
    }
  }

  toFormPage({ valid, value } : { valid: boolean, value: any }): void {
  	if (valid) {
  	  this.router.navigate(['form']);
  	}
  }

}
