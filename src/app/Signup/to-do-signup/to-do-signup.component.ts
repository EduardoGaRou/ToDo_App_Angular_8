import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToDoService } from 'src/app/Service/to-do-service.service';
import { ToDoUsers } from './../../Interface/to-do-users';
import { customValidators } from './../../Utils/customValidators';

@Component({
  selector: 'app-to-do-signup',
  templateUrl: './to-do-signup.component.html',
  styleUrls: ['./to-do-signup.component.css']
})
export class ToDoSignupComponent implements OnInit {

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
  	  username: ['', [Validators.required]],
  	  email: ['', [Validators.required, customValidators.customEmailValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
  	}, {
  	  validators: [customValidators.passwordMatch]
  	});
  }

  get username() {
    return this.form.get('username') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  //Not working yet
  //addUser({ valid, value }:{ valid: boolean, value: string }): void {
  //  if(valid) {
  //    const auxtodo = new ToDoUser(value);
  //    this.todoService.addTodoUser(auxtodo);
  //    this.form.reset();
  //    this.router.navigate(['login']);
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

  toLoginPage({ valid, value }: { valid: boolean, value: any }): void {
  	if (valid)
  	  this.router.navigate(['/login']);
  }

}
