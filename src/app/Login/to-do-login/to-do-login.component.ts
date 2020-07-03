import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './../../Service/login-service.service';
import { ToDoUsers } from './../../Interface/to-do-users';
import { customValidators } from './../../Utils/customValidators';

@Component({
  selector: 'app-to-do-login',
  templateUrl: './to-do-login.component.html',
  styleUrls: ['./to-do-login.component.css']
})
export class ToDoLoginComponent implements OnInit {
  error: string;
  success: string;
  form: FormGroup;

  constructor(
  	private loginService:LoginService,
  	private fb: FormBuilder,
  	private router: Router,
    private actroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  	this.error = this.actroute.snapshot.queryParamMap.get('error');
    this.success = this.actroute.snapshot.queryParamMap.get('success');
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

  loadUser({ valid, value }:{ valid: boolean, value: ToDoUsers }): void {
    if(valid) {
      const myUser = this.loginService.loadTodoUser(value);
      this.loginService.isAuthenticated = !!myUser.length;
        
      if(myUser.length)
        this.router.navigate(['form']);
    }
  }

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

  //Auxiliar router
  //toFormPage({ valid, value } : { valid: boolean, value: any }): void {
  //	if (valid) {
  //	  this.router.navigate(['form']);
  //	}
  //}

}
